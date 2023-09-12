import React from "react";
import { FaStar } from 'react-icons/fa'
export default function Nav(){
    return(
        <>
        <nav className="nav">
            <div className="nav-title">
                <FaStar className="nav-icon"/>
                <h3>My small library</h3>
            </div>
            <div className="nav-menu">
                <a href="https://omars-journey.netlify.app/about" target="_blank"><p>ABOUT ME</p></a>
            </div>
        </nav>
        </>
    )
}