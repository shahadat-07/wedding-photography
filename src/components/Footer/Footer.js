import React from 'react';
import './Footer.css';
import FooterData from '../FooterData/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const noNamed = [
        { name: "Wedding Vendor", link: "/emergency" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Planing", link: "/personal-treatment" },
        { name: "Wedding Planing", link: "/tooth-extract" },
        { name: "Wedding Locations", link: "/checkup" },
    ]
    const ourAddress = [
        { name: "New York - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const oralHealth = [
        { name: "Wedding Vendor", link: "/emergency" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Planing", link: "/personal-treatment" },
        { name: "Wedding Planing", link: "/tooth-extract" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Locations", link: "/checkup" }
    ]
    const services = [
        { name: "Wedding Vendor", link: "/emergency" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Locations", link: "/personal-treatment" },
        { name: "Wedding Planing", link: "/tooth-extract" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Wedding Locations", link: "/checkup" },
        { name: "Check UpWedding Locations", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterData key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterData key={2} menuTitle="Services" menuItems={services} />
                    <FooterData key={3} menuTitle="Wedding" menuItems={oralHealth} />
                    <FooterData key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterData>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;