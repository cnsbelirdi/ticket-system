import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Button } from '../components/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Validation from '../components/Validation';
import { Services } from '../api/Services';
import { useAuth } from '../contexts/AuthContext';
import { Auth } from '../api/Auth';
import { useNavigate } from 'react-router-dom';

const services = new Services();
const authService = new Auth();

export default function SignUp() {

  const [username, setUsername] = useState();
  const [passwordValidation, setPasswordValidation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [signUpForm, setSignUpForm] = useState(null);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const checkUsername = (e) => {
    setUsername(e.replaceAll('@', ''));
  }

  useEffect(() => {
    if (authService.getLoginToken()) {
      navigate('/');
    }
  }, [authService.getLoginToken()]);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
      agreement: false,
      check: false
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('Your name is required'),
      username: Yup.string()
        .required('Username information is required'),
      email: Yup.string().email('Invalid email address').required('Email information is required'),
      phone: Yup.string().required("Phone information is required"),
      address: Yup.string().required("Address information is required"),
      password: Yup.string().min(8, "Password must be at least 8 chars!").required("Password is required"),
      confirmPassword: Yup.string().min(8, "Confirm password must be at least 8 chars!").required("Password is required"),
      agreement: Yup.boolean().isTrue("You must accept aggrement."),
      check: Yup.boolean().isTrue("You must accept KVKK."),
    }),
    onSubmit: async values => {
      setPasswordValidation('');

      if (values.confirmPassword === values.password) {
        await services.register({
          fullName: values.fullName,
          username: values.username,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
          .then(res => {
            console.log(res);
            if (!res.ok) {
              setErrorMessage(res.entity.data);
            }
            else {
              setAuth({
                username: res.entity.data.username,
                role: res.entity.data.role,
                token: res.entity.data.token
              });
              authService.setAuthorizationCookie(res.entity.data.token);

              navigate('/');
            }
          })
          .catch(err => {
            if (!err.ok) {
              setErrorMessage(err.entity.data);
            }

            if (err.entity?.status === 500) {
              setErrorMessage('Somethings weird happened, please try later.');
              console.log(err);
            }
          });
      }

      else {
        setPasswordValidation('Your passwords does not match.')
      }
    }
  });


  useEffect(() => {
    console.log("errors", formik.errors);
  }, [formik.errors]);

  return (
    <div className="page-wrapper p-t-80 min-height-103">
      <div className="wrapper wrapper--w780">
        <div className="card-sign card-4">
          <div className="card-sign-body">
            <h2 className="title">Registration Form</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="sign-row row-space">
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="fullName">
                      Your name</label>
                    <input className="input-style-1" type="text"
                      name="fullName" id="fullName"
                      {...formik.getFieldProps('fullName')} />
                    <Validation touched={formik.touched.fullName} error={formik.errors.fullName} />
                  </div>
                </div>
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="username">
                      username</label>
                    <input className="input-style-1" type="text"
                      name="username" id="username" {...formik.getFieldProps('username')} />

                    <Validation touched={formik.touched.username} error={formik.errors.username} />
                  </div>
                </div>
              </div>
              <div className="sign-row row-space">
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="email">
                      Email</label>
                    <input className="input-style-1" type="email"
                      name="email" id="email" {...formik.getFieldProps('email')} />

                    <Validation touched={formik.touched.email} error={formik.errors.email} />
                  </div>
                </div>
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="phone">
                      Phone Number</label>
                    <input className="input-style-1" type="text"
                      name="phone" id="phone" {...formik.getFieldProps('phone')} />

                    <Validation touched={formik.touched.phone} error={formik.errors.phone} />
                  </div>
                </div>
              </div>
              <div className="sign-row row-space">
                <div className="sign-col">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="address">
                      address</label>
                    <textarea className="input-style-1 textarea"
                      name="address" id="address" {...formik.getFieldProps('address')}></textarea>

                    <Validation touched={formik.touched.address} error={formik.errors.address} />
                  </div>
                </div>
              </div>
              <div className="sign-row row-space">
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="password">
                      password</label>
                    <input className="input-style-1" type="password"
                      name="password" id="password" {...formik.getFieldProps('password')} />

                    <Validation touched={formik.touched.password} error={formik.errors.password} />
                  </div>
                </div>
                <div className="sign-col-2">
                  <div className="sign-input-group">
                    <label className="label" htmlFor="confirmPassword">
                      confirm password</label>
                    <input className="input-style-1" type="password"
                      name="confirmPassword" id="confirmPassword" {...formik.getFieldProps('confirmPassword')} />

                    <Validation touched={formik.touched.confirmPassword} error={formik.errors.confirmPassword} />
                  </div>
                </div>
              </div>
              <div className="sign-row row-space">
                <div className="sign-col">
                  <div className="sign-input-group">
                    <input className="check" type="checkbox"
                      name="agreement" id="agreement" {...formik.getFieldProps('agreement')} />
                    <label htmlFor="agreement">
                      I have read and approve the Fantasticket membership agreement.</label>

                    <Validation touched={formik.touched.agreement} error={formik.errors.agreement} />
                  </div>
                  <div className="sign-input-group">
                    <input className="check" type="checkbox"
                      name="kvkk" id="kvkk"  {...formik.getFieldProps('check')} />
                    <label htmlFor="kvkk">I have read and accept the KVKK.</label>
                    <Validation touched={formik.touched.check} error={formik.errors.check} />
                  </div>
                </div>
              </div>

              <Validation error={passwordValidation} touched={true} />
              <Validation error={errorMessage} touched={true} />

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
