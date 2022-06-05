import React from 'react';
import Cards from '../../components/Cards';
import HeroSection from '../../components/HeroSection';
import CardItem from "../../components/CardItem";
import Event from './components/Event'

function UserEvent() {
    return (
        <>
            <div>
                <Event src='images/deep-purple.jpg'
                          heading='Deep Purple Concert'
                          text='Deep Purple are an English rock band formed in London in 1968. Get your tickets now!'
                          label='Rock Music'
                />
            </div>
        </>
    );
}

export default UserEvent;