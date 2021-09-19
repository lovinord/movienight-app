import React from 'react'
import { Link } from "react-router-dom";
import "./Error.css"

const Error = () => {
    return (
        <div className="errorPage">
            <h1 className="errorH1">Error</h1>
            <p className="errorP">This page doesn't exist...</p>
            <Link to="/" className="button">Go back</Link> 
        </div>
    )
}

export default Error
