import React from 'react'



let tableHeaders = ['Species','Conservation Status', 'Latin Name', 'Habitat']

export default function birddata() {

    return (

            <div className='row'>

            <div id="carouselExampleControls" class="carousel slide d-flex container-fluid shadow p-3 mb-5 bg-body rounded" style={{width:'25em'}} data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://picsum.photos/400" class="d-block w-100 border rounded" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://picsum.photos/400" class="d-block w-100 border rounded" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://picsum.photos/400" class="d-block w-100 border rounded" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            </div>
        

    );
};