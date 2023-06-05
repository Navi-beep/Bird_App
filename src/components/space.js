import React, { useEffect } from 'react'
import {useState} from 'react'


console.log('this is cats')


export default function Spacefacts(props) {

    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        fetch(`https://go-apod.herokuapp.com/apod`)
        .then(res => res.json())
        .then(data => {
            setSpaces(data)
            console.log(data) 
        });
        
    }, []);

    

    return (

        <div className='row'>
            <div className="dflex container-fluid card shadow-sm p-3 mb-5 bg-body rounded" style={{width:'25em'}}>
                <h2  className="text-center shadow-sm p-3 mb-2 bg-body rounded">Astronomy Photo of the day</h2>
            <img src={spaces.hdurl}
                className="card-img-top shadow-sm p-2 mb-1 bg-body rounded" alt="placeholder image"/>
            <div className="card-body">
                <h5 className="card-title text-center">{spaces.title}</h5>
                <p className="card-text text-center">{spaces.explanation}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-center">{spaces.date}</li>
                <li className="list-group-item text-center">Copyright: {spaces.copyright}</li>
            </ul>
            </div>
        </div>

    )

}

//api from https://github.com/lissy93/go-apod

//some more stuff