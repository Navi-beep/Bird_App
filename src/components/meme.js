import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Meme(props){



    return (

        <>
        <div className="card dflex container-fluid mt-3" style={{width:'25em'}}>
            <img src="https://picsum.photos/200" className="card-img-top mt-3" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    )

}
