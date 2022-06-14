import React, { useEffect, useState } from "react";
import Event from '../../components/Event';
import { cities, events } from "../../utils/EventUtils";
import { Services } from '../../api/Services';
import mockEvents from './mockData';


const services = new Services();
export default function ShowEvent() {
    const [eventList, setEventList] = useState([]);
    const eventTypes = events;
    const cityList = cities;

    async function getEvents() {
        await services.getEvents()
            .then((res) => {
                if (res.ok && res.entity.success) {
                    console.log(res);
                    setEventList(res.entity.data);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getEvents();
    }, []);

    async function getEventsByType(e) {
        const eventType = e.target.value;
        if (eventType) {
            await services.getEventsType(eventType)
                .then(res => {
                    if (res.ok && res.entity.success) {
                        console.log(res);
                        setEventList(res.entity.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            await getEvents();
        }
    }

    async function getEventsByPlace(e) {
        const place = e.target.value;
        if (e.target.value) {
            await services.getEventsByPlace(place)
                .then(res => {
                    if (res.ok && res.entity.success) {
                        console.log(res);
                        setEventList(res.entity.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            await getEvents();
        }
    }

    async function getEventsByDate(e) {
        const date = e.target.value;
        if (date) {
            await services.getEventsByDate(date)
                .then(res => {
                    if (res.ok && res.entity.success) {
                        console.log(res);
                        setEventList(res.entity.data);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            await getEvents();
        }
    }

    return (
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
                                <select className="form-control text-uppercase" onChange={getEventsByType} name="event-type" id="event-type" required>
                                    <option value="">Select..</option>
                                    {eventTypes.map(type => {
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
                                <select className="form-control" onChange={getEventsByPlace} id="event-city" name="event-city" required>
                                    <option value="">Select..</option>
                                    {cityList.map(city => {
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
                                <input type="date" className="form-control" onChange={getEventsByDate} id="event-date" name="event-date" />
                            </div>
                        </div>
                    </div>
                    {
                        eventList.map(e => {
                            return (
                                <Event page={"Show"} event={e} />
                            );
                        })
                    }
                </div>
            </div>
        </div>

    );
}