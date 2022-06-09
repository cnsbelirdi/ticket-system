import React from "react";
import AliceCarousel from 'react-alice-carousel';
import './Carousel.css';
import CardItem from './CardItem';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

/*genre:
1 = Music;
2 = Cinema;
3 = Theater;
4 = Stand Up;
5 = Dance;
*/

const CardsItemData = [
    {
        src: 'images/deep-purple.jpg',
        heading: 'Deep Purple Concert',
        text: 'Deep Purple are an English rock band formed in London in 1968. Get your tickets now!',
        label: 'Rock Music',
        path: '/event',
        genre: 1,
    },
    {
        src: 'images/matrix-re.jpg',
        heading: 'Matrix',
        text: 'Thomas Anderson\'s seemingly ordinary life ends when he accepts Morpheus\'s offer, only to wake up...',
        label: 'Sci-Fi',
        path: '/event',
        genre: 2,
    },
    {
        src: 'images/img-3.jpg',
        heading: 'Ocean Movie',
        text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
        label: 'Mystery',
        path: '/event',
        genre: 2,
    },
    {
        src: 'images/dua-lipa.jpg',
        heading: 'Dua Lipa Concert',
        text: 'Dua Lipa is an English singer and songwriter. Tickets are available now!',
        label: 'Pop Music',
        path: '/event',
        genre: 1,
    },
    {
        src: 'images/img-4.jpg',
        heading: 'Theater',
        text: 'Time to show your talent!',
        label: 'Theater',
        path: '/event',
        genre: 3,
    },
    {
        src: 'images/img-5.jpg',
        heading: 'Stage',
        text: 'Time to show your talent!',
        label: 'Adrenaline',
        path: '/event',
        genre: 4,
    },
    {
        src: 'images/img-8.jpg',
        heading: 'Dance',
        text: 'Time to show your talent!',
        label: 'Dance',
        path: '/event',
        genre: 5,
    }
];

const filterItems = (filter) => {
    const arr = [];
    CardsItemData.map((element) => {
        if(element.genre === filter) {
            arr.push(<CardItem
                src={element.src}
                heading={element.heading}
                text={element.text}
                label={element.label}
                path={element.path}
            />);
        }
    })
    console.log(arr)
    return arr;
}

const Carousel = (props) => {
    return (
        <div className='carousel-wrapper'>
            <AliceCarousel
                infinite
                autoPlay
                autoPlayInterval={1500}
                animationDuration={1000}
                mouseTracking
                items={filterItems(props.filter)}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}


export default Carousel;