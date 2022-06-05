import React from 'react';
import './Event.css'

const EventInfo = {
    src: "/images/matrix-re.jpg",
    title: "Matrix Resurrection",
    date: "Wed, May 22nd 2022",
    time: "21:00",
    place: "Istanbul",
    room: ['Room #1', 'Room #2'],
    purchasedTicket: "150",
    unsoldTicket: "150",
    castMusician: 'Yönetmen: Ali Ali,Senaryo: Ayşe Ayşe,Yapımcı: İrem İrem,Oyuncular: Berk Berk',
}

const splitter = EventInfo.castMusician.split(',');

function Event() {
    return (
        <>
            <div className='card__container'>
                <div className="card mb-3" style={{maxWidth: 800}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={EventInfo.src} alt={EventInfo.title} className="event-img"/>
                        </div>
                        <div className="col-3 pl-2">
                            <div className="card-body mt-2 mb-2">
                                <h5 className="card-title">{EventInfo.title}</h5>
                                <p className="card-text text-pink">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    {EventInfo.date}
                                </p>
                                <p className="card-text text-orange">
                                    <i className="far fa-clock mr-1"></i>
                                    {EventInfo.time}
                                </p>
                                <p className="card-text text-secondary">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    {EventInfo.place}
                                </p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-body mt-5">
                                <p className="card-text">Purchased: <span>{EventInfo.purchasedTicket}</span></p>
                                <p className="card-text">Unsold: <span>{EventInfo.unsoldTicket}</span></p>
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
                                EventInfo.room.map(function(element, index) {
                                    return <div className='ticket-days'>
                                             <p className="card-text">{EventInfo.place} - {EventInfo.room[index]}</p>
                                             <button type="button" className="btn btn-outline-info">{EventInfo.date}</button>
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