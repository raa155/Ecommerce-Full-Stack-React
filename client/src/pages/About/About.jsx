import React from "react";
import {Link} from 'react-router-dom';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="left">
                <div className="links">
                    <Link className="about-link" to='/about'>Careers</Link>
                    <Link className="about-link" to='/about'>Social Responsibility</Link>
                    <Link className="about-link" to='/about'>Business with us</Link>
                    <Link className="about-link" to='/about'>Press & Talent</Link>
                    <Link className="about-link" to='/about'>Site Map</Link>
                </div>
            </div>
            <div className="center">
                <h1>About Us</h1>
                <p>
                    WolfwearSheep Clothing, otherwise known as WWS LLC is a fashion industry leader making the latest trends accessible to all while inspiring unique style and confidence. 
                    With a renewed focus on the customer experience, the brand offers high style designs and fashion basics with compelling values and a dynamic store environment. 
                    While driving innovation across e-commerce and digital to expand access and convenience, the brand continues to strengthen its positioning as today’s preferred destination for the fashionable consumer. 
                    WolfWearSheep is located in more than 540 locations globally and online.
                </p>
            </div>
            <div className="right">
                <img src="https://images.unsplash.com/photo-1504119089809-1d5100a33f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80" alt="" />
                <p>WolfWearSheep Headquarters</p>
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                <p>WolfWearSheep Headquarters</p>
            </div>
        </div>
    )

};

export default About;
