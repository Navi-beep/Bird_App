import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Bird App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/birddata">Home</Link>
            <Link className="nav-link" to="/cat">Cat time</Link>
            <Link className="nav-link" to="/space">Space Stuff</Link>
            <Link className="nav-link" to="/birddata">Dumb Stuff</Link>
        </div>
        </div>
        </div>
        </nav>

    );

};


