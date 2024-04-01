import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/' ><li>Home</li> </Link> 
                <Link to='/firebase' ><li>Firebase</li></Link>
                <Link to='/apiget' ><li>GETMethod</li></Link>
                <Link to='/calculator' ><li>Calculator-app</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
