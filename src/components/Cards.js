import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/deep-purple.jpg'
              heading="Deep Purple Concert"
              text='Deep Purple are an English rock band formed in London in 1968. Get your tickets now!'
              label='Rock Music'
              path='/music'
            />
            <CardItem
              src='images/matrix-re.jpg'
              heading="Matrix"
              text="Thomas Anderson's seemingly ordinary life ends when he accepts Morpheus's offer, only to wake up..."
              label='Sci-Fi'
              path='/cinema'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              heading="Ocean Movie"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/cinema'
            />
            <CardItem
              src='images/dua-lipa.jpg'
              heading="Dua Lipa Concert"
              text='Dua Lipa is an English singer and songwriter. Tickets are avaible now!'
              label='Pop Music'
              path='/music'
            />
            <CardItem
              src='images/img-5.jpg'
              heading='Stage'
              text='Time to show your talent!'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
