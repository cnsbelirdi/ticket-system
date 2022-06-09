import React from 'react';
import FilteredCarousel from "../components/FilteredCarousel";

export default function StandUp() {
    return (
        <>
            <div style={{ paddingLeft: 50, background: "#bfbfbf",}}>
                <h1 style={{ padding: 25, }}>Stand Up</h1>
            </div>
            <div style={{ background: "#f0f0f0", margin: -15, }}>
                <div style={{ marginLeft: 50, marginRight: 50, paddingTop: 25, }}>
                    <FilteredCarousel filter={4}/>
                </div>
            </div>
        </>
    );
}
