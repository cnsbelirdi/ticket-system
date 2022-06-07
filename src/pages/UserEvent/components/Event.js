import React from 'react';
import './Event.css'

function Event(props) {
    const splitter = props.castMusician.split(',');

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
            <div className='tabs__container'>
                <div className=" text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Purchase a Ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cast / Musicians</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Event Rules</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h5 className="card-title">Please select a date</h5>
                            {
                                props.room.map(function(element, index) {
                                    return <div className='ticket-days'>
                                             <p className="card-text">{props.place} - {props.room[index]}</p>
                                             <button type="button" className="btn btn-outline-info">{props.date}</button>
                                          </div>
                                })
                            }
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {
                                splitter.map(function(element, index) {
                                    return <p className="card-text">{splitter[index]}</p>
                                })
                            }
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <p className="card-text">
                                <small className="text-muted">
                                *Gününde ve saatinde kullanılmayan biletler geçersiz olup,
                                bilet bedeli iadesi ve/veya değişiklik yapılması mümkün değildir.
                                <br/>
                                *.............
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;