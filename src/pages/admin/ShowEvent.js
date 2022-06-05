import React from "react";
import Event from '../../components/Event';

import mockEvents from './mockData';

export default function ShowEvent(){
    const event_types = ["Music", "Cinema","Theater"];
    const cities = ["ISTANBUL", "ANKARA", "IZMIR", "ANTALYA", "SAMSUN"];
    return(
        <div className="bg-admin-grey min-height-65">
            <div className="container d-flex justify-content-center">
                <div className="events mt-4">
                    <div className="row">
                        <div className="col-2">
                            <h4 className="mt-4">Order : </h4>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-type">Event Type</label>
                                <select className="form-control text-uppercase" name="event-type" id="event-type" required>
                                    <option value="default">Select..</option>
                                    {event_types.map(type => {
                                        return (
                                            <option value={type}>{type}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-city">City</label>
                                <select className="form-control" id="event-city" name="event-city" required>
                                    <option value="default">Select..</option>
                                    {cities.map(city => {
                                        return (
                                            <option value={city}>{city}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-date">Date</label>
                                <input type="date" className="form-control" id="event-date" name="event-date" />
                            </div>
                        </div>
                    </div>
                    {
                        mockEvents.data.map(e => {
                            return(
                                <Event page={"Show"} event={e}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        
    );
}