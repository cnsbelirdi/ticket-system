import React from 'react';
import './Admin.css';
import Event from '../../components/Event';

import mockEvents from './mockData';

export default function Admin() {
    
    return (
        <div className="bg-admin-grey min-height-65">
            <div className="container d-flex justify-content-center">
                <div className="events">
                    <h1 className="pt-4">WELCOME ADMIN!</h1>
                    <h2 className="text-orange">Today's Event</h2>
                    {
                        mockEvents.data.map(e => {
                            return(
                                <Event page={"Main"} event={e}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}