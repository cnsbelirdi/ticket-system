import React from "react";
import AliceCarousel from 'react-alice-carousel';
import './Carousel.css';
import CardItem from './CardItem';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const CardsItemData = [
    {
        src: 'images/deep-purple.jpg',
        heading: 'Deep Purple Concert',
        text: 'Deep Purple are an English rock band formed in London in 1968. Get your tickets now!',
        label: 'Rock Music',
        path: '/event',
    },
    {
        src: 'images/matrix-re.jpg',
        heading: 'Matrix',
        text: 'Thomas Anderson\'s seemingly ordinary life ends when he accepts Morpheus\'s offer, only to wake up...',
        label: 'Sci-Fi',
        path: '/event',
    },
    {
        src: 'images/img-3.jpg',
        heading: 'Ocean Movie',
        text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
        label: 'Mystery',
        path: '/event',
    },
    {
        src: 'images/dua-lipa.jpg',
        heading: 'Dua Lipa Concert',
        text: 'Dua Lipa is an English singer and songwriter. Tickets are available now!',
        label: 'Pop Music',
        path: '/event',
    },
    {
        src: 'images/img-5.jpg',
        heading: 'Stage',
        text: 'Time to show your talent!',
        label: 'Adrenaline',
        path: '/event',
    }
];

const Carousel = () => {
    return (
        <div className='carousel-wrapper'>
            <AliceCarousel
                infinite
                autoPlay
                autoPlayInterval={1500}
                animationDuration={1000}
                mouseTracking
                items={
                    CardsItemData.map(function (element) {
                        return <CardItem
                            src={element.src}
                            heading={element.heading}
                            text={element.text}
                            label={element.label}
                            path={element.path}
                        />
                    })
                }
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}

export default Carousel;