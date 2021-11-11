import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 left">
                        <Fade left>
                            <h3>Let’s Talk</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className="btn">Contact Us</div>
                        </Fade>
                    </div>
                    <div className="col-12 col-md-6 right">
                        <Fade right>
                            <label>Email</label>
                            <p>hello @gmail.com</p>
                            <label>Phone</label>
                            <p>(+91)9875859415</p>
                            <label>Address</label>
                            <p>WeWork ARC 380 jalan Beaser Singapore,209000</p>
                        </Fade>
                    </div>
                </div>
                <Fade top>
                    <div className="social-icons">

                        <i><FaFacebookF /></i>
                        <i><AiFillInstagram /></i>
                        <i><BsTwitter /></i>
                        <i><FaLinkedinIn /></i>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}

export default Footer;