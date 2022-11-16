import React from 'react'

export default function spacefacts() {

    return (

        <div className='row'>
        <div className="dflex container-fluid card" style={{width:'18em'}}>
        <img src="https://via.placeholder.com/100
C/O https://placeholder.com/" className="card-img-top mt-2" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
        </div>
        </div>

    )

}