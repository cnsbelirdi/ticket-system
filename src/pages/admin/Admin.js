import React, { useEffect, useState } from 'react';
import './Admin.css';
import Event from '../../components/Event';
import mockEvents from './mockData';
import { Link } from 'react-router-dom';
import { Services } from '../../api/Services';


const services = new Services();

export default function Admin() {

    const [eventList, setEventList] = useState([]);
    const [totalEvents, setTotalEvents] = useState(0);
    const [activeEvents, setActiveEvents] = useState(0);


    useEffect(() => {
        async function getEvents() {
            await services.getEvents()
                .then((res) => {
                    if (res.ok && res.entity.success) {
                        console.log(res);
                        setEventList(res.entity.data);
                        setTotalEvents(res.entity.data.length);
                        setActiveEvents(res.entity.data.filter(d => !d.cancelled).length);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getEvents();
    }, []);

    return (
        <div className="bg-admin-grey min-height-65">
            {/* <div className="container d-flex justify-content-center"> */}
            <div className="container">
                {/* <div className="events">
                    <h1 className="pt-4">WELCOME ADMIN!</h1>
                    <h2 className="text-orange">Today's Event</h2>
                    {
                        mockEvents.data.map(e => {
                            return(
                                <Event page={"Main"} event={e}/>
                            );
                        })
                    }
                </div> */}
                <div className="dashboard">
                    <h1 className="pt-4">Welcome Admin!</h1>
                    <div className="row">
                        <div className="col-sm bg-white m-2">
                            <div className="lead mt-2">Total Events:</div>
                            <div className="text-right display-4">{totalEvents}</div>
                        </div>
                        <div className="col-sm bg-white m-2">
                            <div className="lead mt-2">Active Events:</div>
                            <div className="text-right display-4">{activeEvents}</div>
                        </div>
                        {/* <div className="col-sm bg-white m-2">
                            <div className="lead mt-2">Total Reveue:</div>
                            <div className="text-right display-4">1500$</div>
                        </div> */}
                    </div>
                    <div className="row mt-2" style={{ minHeight: 550 }}>
                        <div className="col-sm-4 pl-2 pr-2 btn-group-vertical p-0" style={{ justifyContent: 'initial' }}>
                            <Link to={'/admin/show-event'}>
                                <button className="btn bg-orange admin-dash-btn">View All Events</button>
                            </Link>
                            <Link to={'/admin/add-event'}>
                                <button className="btn bg-orange mt-2 admin-dash-btn">Add Event</button>
                            </Link>
                        </div>
                        <div className="col-sm pl-2">
                            <h4>Active Events!</h4>
                            {
                                eventList.map(e => {
                                    return (
                                        <Event page={"Main"} event={e} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}