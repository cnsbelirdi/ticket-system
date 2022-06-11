import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import mockEvents from './admin/mockData';



function Event(){
    const id = parseInt(useParams().id);
    
    const event = mockEvents.data.find(
        x => x.id === id
    )
    
    return(
        <div className="bg-admin-grey min-height-65">
            <div className='container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent">
                        <li className="breadcrumb-item active">{event.eventType}</li>
                        <li className="breadcrumb-item" aria-current="page">{event.eventSubType}</li>
                    </ol>
                </nav>
                <div className="card">
                    <h3 className="card-header">{event.eventName}</h3>
                    <div className="card-body row">
                        <div className="col-sm-6">
                            <img src={event.image} className="w-100" height={250}/>
                        </div>
                        <div className="col-sm-6" style={{fontSize : 20}}>
                            <p>
                                <i className="far fa-calendar mr-1"></i>
                                {event.date.slice(0,event.date.indexOf("'")).replaceAll('-','/')}
                                <i className="far fa-clock mr-1 ml-2"></i>
                                {event.date.slice(event.date.lastIndexOf("'")+1,event.date.length-3).replaceAll('-',':')}
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
                                            <a class="nav-link active" href="#description" data-toggle="tab" aria-controls="description" aria-selected="true" id="description-tab">Description</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a class="nav-link" href="#ticket" data-toggle="tab" aria-controls="ticket" aria-selected="false" id="ticket-tab">Ticket</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="card-body tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        <p>{event.eventDescription}</p>
                                    </div>
                                    <div className="card-body tab-pane" id="ticket" role="tabpanel" aria-labelledby="ticket-tab">
                                        <div className="row">
                                            <div className="col-sm-7">     
                                                <h4 className="text-left bg-admin-grey p-1" >SEARCH FOR TICKETS</h4>
                                                <div className="form-group row">
                                                    <label for="ticketSelect" className="col-sm-3 col-form-label text-left">TICKET TYPE</label>
                                                    <div className="col-sm-7">
                                                        <select className="form-control" id="ticketSelect" name="ticketSelect">
                                                            <option selected>Standart {event.unitPrice}$</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <select className="form-control" id="ticketPiece" name="ticketPiece">
                                                            <option selected>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='form-group row border-top pt-3'>
                                                    <label for="ticketCat" className="col-sm-3 col-form-label text-left">BLOCK</label>
                                                    <div className="col-sm-7">
                                                        <select className="form-control" id="ticketCat" name="ticketCat">
                                                            <option selected>Standart</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <h4 className="text-left bg-admin-grey p-1" >SEATING PLAN</h4>
                                                <img src="/images/noseat.jpg" className="w-100" />
                                            </div>
                                            <div className='col-sm-5'>
                                                <h4 className="text-left bg-admin-grey p-1" >YOUR TICKETS</h4>
                                                <h5 className="border-bottom text-left pb-1">Ticket total : 1</h5>
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
                                                            <li>55.5$</li>
                                                            <li>1</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button className='btn bg-orange float-right'>BUY</button>
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
    )
}

export default Event;