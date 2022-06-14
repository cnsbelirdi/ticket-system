import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Services } from "../../api/Services";
import { useAuth } from '../../contexts/AuthContext';

const services = new Services();
const AccountScreen = props => {

  const [tickets, setTickets] = useState([]);
  const [totalTickets, setTotalTickets] = useState(0);
  const [activeTickets, setActiveTickets] = useState(0);
  const [auth, setAuth] = useAuth();

  async function getTickets() {
    await services.getTicketsByUser()
      .then(res => {
        console.log(res);
        if (res.ok && res.entity.success) {
          setTickets(res.entity.data);
          setTotalTickets(res.entity.data.length);
          setActiveTickets(res.entity.data.filter(s => !s.cancelled).length);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getTickets();
  }, []);

  async function cancelTicket(ticketId) {
    await services.cancelTicket(ticketId)
      .then(res => {
        if (res.ok) {
          window.location.href = "/account";
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="bg-admin-grey min-height-65">
      <div className="container">

        <div className="dashboard">
          <h1 className="pt-4">Welcome {auth.username}!</h1>
          <div className="row">
            <div className="col-sm bg-white m-2">
              <div className="lead mt-2">Total Tickets:</div>
              <div className="text-right display-4">{totalTickets}</div>
            </div>
            <div className="col-sm bg-white m-2">
              <div className="lead mt-2">Active Tickets:</div>
              <div className="text-right display-4">{activeTickets}</div>
            </div>

          </div>
          <div className="row mt-3 justify-content-center pb-3" style={{ minHeight: 550 }}>
            <div className="col-sm-8 pl-2">
              <h4>Active Tickets!</h4>
              {
                tickets.map(e => {
                  return <TicketCard {...e} cancelTicket={cancelTicket} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TicketCard = props => {
  const { eventId, seatNumber, ticketCount, totalAmount, id, cancelled, cancelTicket } = props;
  console.log("seats", seatNumber);
  const navigate = useNavigate();
  return <>
    <div class="card flex-row pb-1 mb-2">
      <img src={"/images/ticket.jpg"} alt="ticket" className="event-img rounded-0 float-left" />
      <div class="card-body">

        <div className="row">
          <div className="col-6">
            <h5 className="card-title">{"Ticket " + id} ({cancelled ? "Cancelled" : "Active"})</h5>
            <p className="card-text text-pink">
              <i className="fas fa-users mr-1"></i>
              {ticketCount}
              {/* {event.date} */}
            </p>
            <p className="card-text text-orange">
              <i className="fas fa-money-bill mr-1"></i>
              {totalAmount}
            </p>
            {
              seatNumber && <p className="card-text text-secondary">
                <i className="fas fa-theater-masks mr-1"></i>
                {seatNumber.join(', ')}
              </p>
            }
            {
              !seatNumber && <p className="card-text text-secondary">
                NO SEAT PLAN
              </p>
            }
          </div>
          <div className="col-6">
            <div className="row align-items-center justify-content-center">
              <button type="button" onClick={(e) => navigate('/event/' + eventId)} className="btn col-12 bg-orange mt-5">Show Event</button>
              <button type="button" className="btn btn-cancel col-12 mt-2" onClick={async () => await cancelTicket(id)}>Cancel Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="card mb-4">
      <div className="row">
        <div className="col-sm">
          <img src={"/images/ticket.jpg"} alt="ticket" className="event-img rounded-0" />
        </div>
        <div className="col-sm">
          <div className="card-body border-right-dashed mt-2 mb-2">

          </div>
        </div>
        <div className="col-sm-2">

        </div>
      </div>
    </div> */}
  </>
}

export default AccountScreen;