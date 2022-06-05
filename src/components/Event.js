import React from 'react';

export default function Event({page,event}){
    return(
        <div className="card mb-4 radius-10" style={{maxWidth:800}}>
            <div className="row no-gutters">
                <div className="col-3">
                    <img src={event.image} alt="Deep Purple" className="event-img"/>
                </div>
                <div className="col-3 pl-2">
                    <div className="card-body border-right-dashed mt-2 mb-2">
                        <h5 className="card-title">{event.eventName}</h5>
                        <p className="card-text text-pink">
                            <i className="far fa-calendar-alt mr-1"></i>
                            {event.date.slice(0,event.date.indexOf("'")).replaceAll('-','/')}
                        </p>
                        <p className="card-text text-orange">
                            <i className="far fa-clock mr-1"></i>
                            {event.date.slice(event.date.lastIndexOf("'")+1,event.date.length-3).replaceAll('-',':')}
                        </p>
                        <p className="card-text text-secondary">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {event.place}
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-body mt-5">
                        <p className="card-text">Capacity: <span>{event.capacity}</span></p>
                        <p className="card-text">Price: <span>{event.unitPrice}$</span></p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-body">
                        <button type="button" className="btn bg-orange mt-5 radius-10">Show Details</button>
                        {
                            page !== "Main" ? 
                            <button type="button" className="btn btn-cancel mt-2 ml-4 radius-10">Cancel</button>:""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}