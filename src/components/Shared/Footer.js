import React from 'react';
import Logo2 from '../../images/Logo2.png'
import Logo3 from '../../images/Logo3.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-secondary text-base-content grid grid-cols-2 md:grid-cols-4">
                <div>
                    <img className='w-44' src={Logo3} alt="logo" />
                    <p>Cosmetic Product Ltd. <br /> Providing reliable beauty product since 2010</p>
                </div>
                <div>
                    <span className="footer-title">Dashboard</span>
                    <a className="link link-hover" href='*'>Products</a>
                    <a className="link link-hover" href='*'>Design</a>
                    <a className="link link-hover" href='*'>Marketing</a>
                    <a className="link link-hover" href='*'>Offers</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover" href='*'>About us</a>
                    <a className="link link-hover" href='*'>Contact</a>
                    <a className="link link-hover" href='*'>Jobs</a>
                    <a className="link link-hover" href='*'>Campaign</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href='*'>Terms of use</a>
                    <a className="link link-hover" href='*'>Privacy policy</a>
                    <a className="link link-hover" href='*'>Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;