import React from 'react';
import './SignUp.css';
import { Button } from '../components/Button'
import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <div className="page-wrapper p-t-80 min-height-65">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <form method="POST">
                            <div className="row row-space">
                                <div className="col">
                                    <div className="input-group">
                                        <label className="label" htmlFor="email_username">Email & Username</label>
                                        <input className="input-style-1" type="text" name="username" id="email_username" />
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col">
                                    <div className="input-group">
                                        <label className="label" htmlFor="password">Password</label>
                                        <input className="input-style-1" type="password" name="password" id="password"/>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to='/forgot-password'
                                className='link'
                            >
                                Forgot password?
                            </Link>
                            <div className="p-t-15">
                                <Button className='btns'
                                        buttonStyle='btn--primary'
                                        buttonSize='btn--large'
                                        type="submit"
                                >
                                    SIGN IN
                                </Button>
                            </div>
                            <div class="notmember">
                                Not a member?
                                <Link
                                    to='/sign-up'
                                    className='link'
                                    style={{paddingLeft:4}}
                                >
                                    Sign up
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
