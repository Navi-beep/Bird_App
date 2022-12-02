import React from 'react'
import harold from '../images/harold.jpeg'
import obi from '../images/obi.jpeg'
import duck from '../images/duck.jpeg'


//let tableHeaders = ['Species','Conservation Status', 'Latin Name', 'Habitat']

export default function birddata() {

    return (

            <div className='row'>

            <div id="carouselExampleControls" className="carousel slide d-flex container-fluid shadow p-3 mb-5 bg-body rounded" style={{width:'25em'}} data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={harold} className="d-block w-100 border rounded" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={obi} className="d-block w-100 border rounded" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={duck} className="d-block w-100 border rounded" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        

    );
};


function eatcheese() {
    console.log('cheddar');
}

eatcheese();

function apples(seed) {
    console.log(seed*2);
}

apples(5);