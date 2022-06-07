import React from 'react';
import Reservation from "./components/Reservation";

const EventInfo = {
    src: "/images/matrix-re.jpg",
    title: "Matrix Resurrection",
    date: "Wed, May 22nd 2022",
    time: "21:00",
    place: "Istanbul",
    room: ['Room #1', 'Room #2'],
    purchasedTicket: "150",
    unsoldTicket: "150",
    castMusician: 'Yönetmen: Ali Ali,Senaryo: Ayşe Ayşe,Yapımcı: İrem İrem,Oyuncular: Berk Berk',
}

function UserReserv() {
    return (
        <>
            <Reservation
                src={EventInfo.src}
                title={EventInfo.title}
                date={EventInfo.date}
                time={EventInfo.time}
                place={EventInfo.place}
                purchasedTicket={EventInfo.purchasedTicket}
                unsoldTicket={EventInfo.unsoldTicket}
            />
        </>
    );
}

export default UserReserv;

