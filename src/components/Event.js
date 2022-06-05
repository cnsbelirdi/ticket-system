import React from 'react';

export default function Event({page}){
    return(
        <div className="card mb-4 radius-10" style={{maxWidth:800}}>
            <div className="row no-gutters">
                <div className="col-3">
                    <img src="/images/deep-purple.jpg" alt="Deep Purple" className="event-img"/>
                </div>
                <div className="col-3 pl-2">
                    <div className="card-body border-right-dashed mt-2 mb-2">
                        <h5 className="card-title">Deep Purple Concert</h5>
                        <p className="card-text text-pink">
                            <i class="far fa-calendar-alt mr-1"></i>
                            Wed, May22, 2022
                        </p>
                        <p className="card-text text-orange">
                            <i class="far fa-clock mr-1"></i>
                            21:00
                        </p>
                        <p className="card-text text-secondary">
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            Istanbul
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-body mt-5">
                        <p className="card-text">Purchased: <span>150</span></p>
                        <p className="card-text">Unsold: <span>150</span></p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-body">
                        <button type="button" class="btn bg-orange mt-5 radius-10">Show Details</button>
                        {
                            page !== "Main" ? 
                            <button type="button" class="btn btn-cancel mt-2 ml-4 radius-10">Cancel</button>:""
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}