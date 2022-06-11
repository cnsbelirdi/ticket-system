import React, { useEffect } from 'react';
import './SignUp.css';
import { Button } from '../components/Button'
import { Link, useNavigate } from 'react-router-dom';
import {Services} from '../api/Services';
import { Auth } from '../api/Auth';
import { useAuth } from '../contexts/AuthContext';


const services = new Services();
const authService = new Auth();

export default function SignIn() {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();
        const username = e.target.username?.value;
        const password = e.target.password?.value;

        if(username && password){
            await authService.login(username, password)
                    .then(res => {
                        setAuth({
                            role: res.entity.data.role,
                            username: res.entity.data.username,
                            token : res.entity.data.token
                        });

                        console.log("data", res);
                    }).catch(err => console.log(err));         
        }
    }


    useEffect(()=> {
        if(authService.getLoginToken()){
            navigate("/", { replace: true });
        }
    }, [authService.getLoginToken()]);

    return (
        <div className="page-wrapper p-t-80 min-height-65">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <form method="POST" onSubmit={handleLogin}>
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
                            <div className="notmember">
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
