import React from 'react';
import '../App.css';
import './SignUp.css';
import { Button } from '../components/Button'

export default function SignUp() {
  return (
    <div className="page-wrapper p-t-80 min-height-103">
        <div className="wrapper wrapper--w780">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form</h2>
                    <form method="POST">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label" for="first_name">first name</label>
                                    <input className="input-style-1" type="text" name="first_name"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label" for="last_name">last name</label>
                                    <input className="input-style-1" type="text" name="last_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                              <div className="input-group">
                                    <label className="label" for="email">Email</label>
                                    <input className="input-style-1" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                              <div className="input-group">
                                    <label className="label" for="phone">Phone Number</label>
                                    <input className="input-style-1" type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col">
                              <div className="input-group">
                                <label className="label" for="address">address</label>
                                <textarea className="input-style-1 textarea" name="address"></textarea>
                              </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label" name="password">password</label>
                                    <input className="input-style-1" type="password" name="password"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">confirm password</label>
                                    <input className="input-style-1" type="password" name="confirm_password"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col">
                              <div className="input-group">
                                <input className="check" type="checkbox" name="agreement"/>
                                <label for="agreement">I have read and approve the Fantasticket membership agreement.</label>
                                
                              </div>
                              <div className="input-group">
                                <input className="check" type="checkbox" name="kvkk"/>
                                <label for="kvkk">I have read and accept the KVKK.</label>
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
