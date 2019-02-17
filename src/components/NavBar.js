import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">{props.brand}</Link>

        </nav>
    );
}