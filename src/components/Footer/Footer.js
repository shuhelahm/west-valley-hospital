import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <div className='footer-section text-white'>
            <div className='footer-container p-3 m-auto my-2 d-grid'>
                    <div className='footer-address'>
                        <h2>West Valley Hospital</h2>
                        <p>West Valley Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                    </div>
                    <div className='footer-branch'>
                        <h2>Total Branches:</h2>
                        <ul>
                            <li>Dhaka</li>
                            <li>Chittagong</li>
                            <li>Sylhet</li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <h2>GET US</h2>
                        <ul>
                            <li>21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</li>
                            <li>10633, +8809666700100</li>
                            <li>info@wvh.com.bd, wvh.dhaka@gmail.com</li>
                        </ul>
                    </div>
            </div>
            <p>Copyright 2021<span >&copy;</span> || West Valley Hospital</p>
        </div> 
        </footer>
    );
};

export default Footer;