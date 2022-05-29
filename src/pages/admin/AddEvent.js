import React from "react";

export default function AddEvent(){
    return(
        <div className="bg-admin-grey min-height-65">
            <div className="container d-flex justify-content-center pt-5">
                <form method="POST" className="min-width-780">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="event-type">Event Type</label>
                                <select className="form-control" name="event-type" id="event-type" required>
                                    <option>MUSIC</option>
                                    <option>CINEMA</option>
                                    <option>STAGE</option>
                                </select>
                                <div className="invalid-feedback">Required.</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label for="event-city">City</label>
                                <select className="form-control" id="event-city" name="event-city" required>
                                    <option>ISTANBUL</option>
                                    <option>ANKARA</option>
                                    <option>IZMIR</option>
                                    <option>ANTALYA</option>
                                    <option>MUGLA</option>
                                </select>
                                <div className="invalid-feedback">Required.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="event-name">Event Name</label>
                                <input type="text" className="form-control" id="event-name" name="event-name"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label for="artist-name">Artist Name</label>
                                <input type="text" className="form-control" id="artist-name" name="artist-name"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="event-date">Date</label>
                                <input type="date" className="form-control" id="event-date" name="event-date"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label for="event-time">Time</label>
                                <input type="time" className="form-control" id="event-time" name="event-time"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label for="description">Description</label>
                                <textarea name="description" id="description" className="form-control description" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row dflex justify-content-end">
                        <div className="col-2">
                            <button type="button" class="btn bg-orange pl-4 pr-4 radius-10">ADD</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}