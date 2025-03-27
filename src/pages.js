import React from "react";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>  
    );
}
  
export function About() {
    return (
        <div>
            <h1>[About Us]</h1>
        </div>  
    );
}

  
export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>  
    );
}
  

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>  
    );
}

export function Whoops404() {
    return (
        <div>
            <h1>Whoops, page/route not found</h1>
        </div>
    );
}