import React, { useState } from "react";

export default function AddEvent(){
    const event_types = ["Music", "Cinema","Theater"];
    const cities = ["ISTANBUL", "ANKARA", "IZMIR", "ANTALYA", "SAMSUN"];
    const [type ="default", setType] = useState();
    return(
        <div className="bg-admin-grey min-height-65">
            <div className="container d-flex justify-content-center pt-5">
                <form method="" className="min-width-780">
                        {
                            type === "default" ? 
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="event-type">Event Type</label>
                                        <select value={type} onChange={(e) => setType(e.target.value)} className="form-control text-uppercase" name="event-type" id="event-type" required>
                                            <option value="default">Select..</option>
                                            {event_types.map(type => {
                                                return (
                                                    <option value={type}>{type}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            :
                            type === "Music" ?
                            <>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-type">Event Type</label>
                                        <select value={type} onChange={(e) => setType(e.target.value)} className="form-control text-uppercase" name="event-type" id="event-type" required>
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
                            </div>
                            <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="event-name">Event Name</label>
                                            <input type="text" className="form-control" id="event-name" name="event-name" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="artist-name">Artist Name</label>
                                            <input type="text" className="form-control" id="artist-name" name="artist-name" />
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-date">Date</label>
                                        <input type="date" className="form-control" id="event-date" name="event-date" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-time">Time</label>
                                        <input type="time" className="form-control" id="event-time" name="event-time" />
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
                            <div className="row dflex justify-content-end">
                                <div className="col-2">
                                    <button type="submit" className="btn bg-orange pl-4 pr-4 radius-10">ADD</button>
                                </div>
                            </div>
                            </>
                            :
                            <>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-type">Event Type</label>
                                        <select value={type} onChange={(e) => setType(e.target.value)} className="form-control text-uppercase" name="event-type" id="event-type" required>
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
                                            <label htmlFor="event-name">Event Name</label>
                                            <input type="text" className="form-control" id="event-name" name="event-name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-date">Date</label>
                                        <input type="date" className="form-control" id="event-date" name="event-date" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="event-time">Time</label>
                                        <input type="time" className="form-control" id="event-time" name="event-time" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="cast">Cast</label>
                                        <textarea name="cast" id="cast" className="form-control description" rows="5"></textarea>
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
                                        <label htmlFor="event-rules">Event Rules</label>
                                        <textarea name="event-rules" id="event-rules" className="form-control description" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row dflex justify-content-end">
                                <div className="col-2 mb-5">
                                    <button type="submit" className="btn bg-orange pl-4 pr-4 mb-5 radius-10">ADD</button>
                                </div>
                            </div>
                            </>
                        }
                </form>
            </div>
        </div>
    );
}