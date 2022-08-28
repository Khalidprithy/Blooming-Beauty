import React from 'react';
import Logo2 from '../../images/Logo2.png'
import Logo3 from '../../images/Logo3.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-secondary text-base-content">
                <div>
                    <img className='w-32' src={Logo3} alt="" />
                    <p>Cosmetic Product Ltd. <br /> Providing reliable beauty product since 2020</p>
                </div>
                <div>
                    <span className="footer-title">Dashboard</span>
                    <a className="link link-hover">Products</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Campaign</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;