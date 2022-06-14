import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Services } from '../api/Services';
import mockEvents from './admin/mockData';
import moment from 'moment';
import SeatPicker from 'react-seat-picker';

const services = new Services();

function Event() {
  // const id = parseInt(useParams().id);
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState({
    eventId: id,
    ticketCount: 0,
    totalAmount: 0,
    seatNumber: []
  });
  const [rowList, setRowList] = useState([]);
  const [seatPlans, setSeatPlan] = useState([]);

  // const event = mockEvents.data.find(
  //   x => x.id === id
  // )

  useEffect(() => {
    createRowList([], 50);

    async function getEvent() {
      await services.getEvent(id)
        .then(res => {
          console.log(res);
          if (res.entity?.success) {
            setEvent(res.entity.data);


            const totalSeats = res.entity.data.capacity;
            const selledSeats = res.entity.data.selledSeats ?? [];

            createRowList(selledSeats, totalSeats);
          }
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }

    getEvent();
  }, []);

  function handleTicketSelection(e) {
    e.preventDefault();

    console.log(seatPlans);

    const ticketCount = event.hasSeatPlan
      ? seatPlans.length : e.target.ticketCount.value;
    const ticketType = e.target.ticketType.value;
    const totalAmount = ticketType === "STANDART"
      ? event.unitPrice * ticketCount
      : event.unitPrice * 6 / 10 * ticketCount;
    let ticket = {
      eventId: id,
      totalAmount: totalAmount,
      ticketCount: ticketCount,
    };

    if (event.hasSeatPlan) {
      ticket.seatNumber = seatPlans.map(s => s.seatName);
    }
    console.log(ticket);
    setTicket(ticket);
  }

  async function buyTicket() {
    await services.addTicket(ticket)
      .then(async res => {
        console.log(res);

        if (res.ok && event.hasSeatPlan) {
          await services.addSeatsToEvent(event.id, seatPlans.map(s => s.id))
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  const createRowList = (selledSeats, totalSeats) => {
    const allRows = [];
    for (let i = 0; i <= ((totalSeats > 200 ? 200 : totalSeats) / 10); i++) {
      let currentRow = [];
      for (let j = 1; j <= 10; j++) {
        let id = i * 10 + j;
        currentRow.push({ id: id, number: j, isReserved: selledSeats.includes(id) ?? false });
      }
      allRows.push(currentRow);
    }

    setRowList(allRows);
  }


  const addSeatCallback = async ({ row, number, id }, addCb) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    console.log(`Added seat ${number}, row ${row}, id ${id}`)

    const newTooltip = `Reserved by you`
    addCb(row, number, id, newTooltip)

    setSeatPlan(prev => [...seatPlans, {
      id: id,
      seatName: `${row}-${number}`
    }])
  }



  const removeSeatCallback = async ({ row, number, id }, removeCb) => {
    await new Promise(resolve => setTimeout(resolve, 300))
    console.log(`Removed seat ${number}, row ${row}, id ${id}`)
    // A value of null will reset the tooltip to the original while '' will hide the tooltip
    removeCb(row, number)
    setSeatPlan(prev => seatPlans.filter(s => s.id !== id))
  }

  

  return <>
    {
      !loading && <div className="bg-admin-grey min-height-65">
        <div className='container'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent">
              <li className="breadcrumb-item active">{event.type}</li>
              <li className="breadcrumb-item text-uppercase" aria-current="page">{event.subType}</li>
            </ol>
          </nav>
          <div className="card">
            <h3 className="card-header">{event.eventName}</h3>
            <div className="card-body row">
              <div className="col-sm-6 pb-3">
                <img src={event.image ?? "/images/no-image.jpg"} className="w-100" height={250} alt='event' />
              </div>
              <div className="col-sm-6" style={{ fontSize: 20 }}>
                <p>

                  <i className="far fa-calendar mr-1"></i>
                  {moment(event.date).format("HH:MM DD/MM/YYYY")}

                  <i className="far fa-clock mr-1 ml-3"></i>
                  {event.dayOfDate}
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  {event.place}
                </p>
              </div>
              <div className="col-sm-12 mt-2">
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active" href="#description" data-toggle="tab"
                          aria-controls="description" id="description-tab">Description</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link" href="#ticket" data-toggle="tab" aria-controls="ticket"
                          id="ticket-tab">Ticket</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div className="card-body tab-pane fade show active" id="description" role="tabpanel"
                      aria-labelledby="description-tab">
                      <p>{event.eventDescription}</p>
                    </div>
                    <div className="card-body tab-pane" id="ticket" role="tabpanel" aria-labelledby="ticket-tab">
                      <div className="row">
                        <div className="col-sm-7">
                          <h4 className="text-left bg-admin-grey p-1" >SEARCH FOR TICKETS</h4>
                          <form className="form-group row" onSubmit={handleTicketSelection}>
                            <label for="ticketSelect" className="col-sm-3 col-form-label text-left"
                            >TICKET TYPE</label>
                            <div className={`${event.hasSeatPlan ? "col-sm-9" : "col-sm-7"}`}>
                              <select className="form-control" id="ticketType" name="ticketType">
                                <option value={"STANDART"} selected>Standart {event.unitPrice}$</option>
                                <option value={"STUDENT"} selected>Student {event.unitPrice * 6 / 10}$</option>
                              </select>
                            </div>
                            <div className="col-sm-2" hidden={event.hasSeatPlan}>
                              <select className="form-control" id="ticketCount" name="ticketCount">
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </div>

                            <div className='form-group row border-top pt-3 col-sm-12'>
                              <label for="ticketCat" className="col-sm-3 col-form-label text-left"
                              >BLOCK</label>
                              <div className="col-sm-7">
                                <select className="form-control" id="ticketCat" name="ticketCat">
                                  <option selected>Standart</option>
                                </select>
                              </div>
                            </div>

                            <button className='btn bg-orange float-right ml-auto mr-3 mt-3'>ADD TICKET</button>
                          </form>

                          <h4 className="text-left bg-admin-grey p-1" >SEATING PLAN</h4>
                          {
                            !event.hasSeatPlan &&
                            <img src="/images/noseat.jpg" className="w-100" alt='no-seat' />
                          }
                          {
                            event.hasSeatPlan &&
                            <div className='pl-3 pt-3 w-100'>
                              <SeatPicker
                                addSeatCallback={addSeatCallback}
                                removeSeatCallback={removeSeatCallback}
                                rows={rowList}
                                maxReservableSeats={3}
                                alpha
                                visible
                                selectedByDefault
                                className="seat-picker"
                              />
                            </div>

                          }
                        </div>
                        <div className='col-sm-5'>
                          <h4 className="text-left bg-admin-grey p-1" >YOUR TICKETS</h4>
                          <h5 className="border-bottom text-left pb-1">Ticket total : {ticket.ticketCount}</h5>
                          <div className="row">
                            <div className="col-sm text-left">
                              <ul className="list-unstyled">
                                <li>Block:</li>
                                <li>Ticket Price:</li>
                                <li>Ticket: </li>
                              </ul>
                            </div>
                            <div className="col-sm text-right">
                              <ul className="list-unstyled">
                                <li>Standart</li>
                                <li>{ticket.totalAmount}$</li>
                                <li>{ticket.ticketCount}</li>
                              </ul>
                            </div>
                          </div>
                          <button type='button' onClick={buyTicket} className='btn bg-orange float-right'>BUY</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </>
}

export default Event;