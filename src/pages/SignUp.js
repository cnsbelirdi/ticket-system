import React, { useState } from 'react';
import './SignUp.css';
import { Button } from '../components/Button'

export default function SignUp() {

    const [username, setUsername] = useState();
    const [signUpForm, setSignUpForm] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }



    const checkUsername = (e) => {
        setUsername(e.replaceAll('@', ''));
    }

    return (
        <div className="page-wrapper p-t-80 min-height-103">
            <div className="wrapper wrapper--w780">
                <div className="card-sign card-4">
                    <div className="card-sign-body">
                        <h2 className="title">Registration Form</h2>
                        <form method="POST">
                            <div className="sign-row row-space">
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="full_name">Your name</label>
                                        <input className="input-style-1" type="text" name="full_name" id="full_name" />
                                    </div>
                                </div>
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="username">username</label>
                                        <input className="input-style-1" type="text" name="username" id="username" value={username} onChange={(e) => checkUsername(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="sign-row row-space">
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="email">Email</label>
                                        <input className="input-style-1" type="email" name="email" id="email" />
                                    </div>
                                </div>
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="phone">Phone Number</label>
                                        <input className="input-style-1" type="text" name="phone" id="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="sign-row row-space">
                                <div className="sign-col">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="address">address</label>
                                        <textarea className="input-style-1 textarea" name="address" id="address"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="sign-row row-space">
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="password">password</label>
                                        <input className="input-style-1" type="password" name="password" id="password" />
                                    </div>
                                </div>
                                <div className="sign-col-2">
                                    <div className="sign-input-group">
                                        <label className="label" htmlFor="confirm_password">confirm password</label>
                                        <input className="input-style-1" type="password" name="confirm_password" id="confirm_password" />
                                    </div>
                                </div>
                            </div>
                            <div className="sign-row row-space">
                                <div className="sign-col">
                                    <div className="sign-input-group">
                                        <input className="check" type="checkbox" name="agreement" id="agreement" />
                                        <label htmlFor="agreement">I have read and approve the Fantasticket membership agreement.</label>
                                    </div>
                                    <div className="sign-input-group">
                                        <input className="check" type="checkbox" name="kvkk" id="kvkk" />
                                        <label htmlFor="kvkk">I have read and accept the KVKK.</label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-t-15">
                                <Button className='btns'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'
                                    type="submit"
                                >
                                    SIGN UP
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
