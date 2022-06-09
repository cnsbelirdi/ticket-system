import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
              If you have any questions, please contact us.
            </p>
            <p className='footer-subscription-text'>
              You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
              <form>
                <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
            </div>
          </section>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Who Are We?</Link>
            <Link to='/'>Language and Programs We Used</Link>
            <Link to='/'>Contact Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Looking for Help?</h2>
            <Link to='/'>Help</Link>
            <Link to='/'>Gift Card</Link>
            <Link to='/'>Fantastic Wallet</Link>
            <Link to='/'>Event Ticket Insurance</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/'>Contract & Policies</Link>
            <Link to='/'>Cookie Policy</Link>
            <Link to='/'>Return Policy</Link>
            <Link to='/'>About GDPR</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              fantasticket
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>developed by Group 2 ©2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
