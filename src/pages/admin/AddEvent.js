import React, { useState } from "react";

export default function AddEvent(){
    const event_types = ["Music", "Cinema","Theater"];
    const cities = ["ISTANBUL", "ANKARA", "IZMIR", "ANTALYA", "SAMSUN"];
    const [type ="default", setType] = useState();
    return(
        <div className="bg-admin-grey min-height-65">
            <div className="container d-flex justify-content-center pt-5">
                <form method="" className="min-width-780">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-type">Event Type</label>
                                <select value={type} onChange={(e) => setType(e.target.value)} className="form-control text-uppercase" name="event-type" id="event-type" >
                                    <option value="default" disabled>Select..</option>
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
                                <label htmlFor="event-name">Event Name</label>
                                <input type="text" className="form-control" id="event-name" name="event-name" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>Event Image</label>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="event-image" name="event-image"/>
                                        <label className="custom-file-label" htmlFor="event-image">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" id="description" className="form-control description" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-datetime">Date - Time</label>
                                <input type="datetime-local" className="form-control" id="event-datetime" name="event-datetime" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-place">Place</label>
                                <select className="form-control" id="event-place" name="event-place" required>
                                    <option value="default">Select..</option>
                                    {cities.map(city => {
                                        return (
                                            <option value={city}>{city}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-capacity">Capacity</label>
                                <input type="number" className="form-control" id="event-capacity" name="event-capacity" min="1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="event-price">Price</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input type="number" className="form-control" id="event-price" name="event-price" min="1.00" step="0.10"  />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group admin-event-check">
                                <input type="checkbox" name="seatplan"/>
                                <label for="seatplan">Seat plan</label>
                            </div>
                        </div>
                    </div>
                    <div className="row dflex justify-content-end">
                        <div className="col-2 mb-5">
                            <button type="submit" className="btn bg-orange pl-4 pr-4 mb-5 radius-10">ADD</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}