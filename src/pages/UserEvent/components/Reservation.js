import React from 'react';
import './Reservation.css'
import Seat from './Seat';

function Reservation(props) {
    return (
        <>
            <div className='card__container'>
                <div className="card mb-3" style={{maxWidth: 800}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={props.src} alt={props.title} className="event-img"/>
                        </div>
                        <div className="col-3 pl-2">
                            <div className="card-body mt-2 mb-2">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text text-pink">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    {props.date}
                                </p>
                                <p className="card-text text-orange">
                                    <i className="far fa-clock mr-1"></i>
                                    {props.time}
                                </p>
                                <p className="card-text text-secondary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    {props.place}
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-body mt-5">
                                <p className="card-text">Purchased: <span>{props.purchasedTicket}</span></p>
                                <p className="card-text">Unsold: <span>{props.unsoldTicket}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Seat />
        </>
    );
}

export default Reservation;