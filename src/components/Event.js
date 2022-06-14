import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import { Services } from '../api/Services';


const services = new Services();

export default function Event({ page, event }) {

    const navigate = useNavigate();

    const cancelEvent = async (eventId) => {
        await services.cancelEvent(eventId)
            .then(res => {
                console.log(res);
                if (res.success && res.entity.success) {
                    // window.location.href = "/event"+

                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="card mb-4" style={{ maxWidth: 800 }}>
            <div className="row no-gutters">
                <div className="col-sm">
                    <img src={event.image ?? "/images/no-image.jpg"} alt="Deep Purple" className="event-img rounded-0" />
                </div>
                <div className="col-sm">
                    <div className="card-body border-right-dashed mt-2 mb-2">
                        <h5 className="card-title">{event.eventName}</h5>
                        <p className="card-text text-pink">
                            <i className="far fa-calendar-alt mr-1"></i>
                            {moment(event.date).format("HH:MM DD/MM/YYYY")}
                            {/* {event.date} */}
                        </p>
                        <p className="card-text text-orange">
                            <i className="far fa-clock mr-1"></i>
                            {event.dayOfDate}
                        </p>
                        <p className="card-text text-secondary">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {event.place}
                        </p>
                        {
                            event.cancelled && <p className='card-text text-secondary'>
                                CANCELLED
                            </p>
                        }
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card-body mt-5">
                        <p className="card-text">Capacity: <span>{event.capacity}</span></p>
                        <p className="card-text">Price: <span>{event.unitPrice}$</span></p>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card-body">
                        <button type="button" onClick={(e) => navigate('/event/' + event.id)} className="btn bg-orange mt-5">Show Details</button>
                        {
                            page !== "Main" ?
                                <button type="button" className="btn btn-cancel mt-2 ml-4" onClick={async (e) => await cancelEvent(event.id)}>Cancel</button> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}