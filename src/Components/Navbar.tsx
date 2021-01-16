import React from 'react'

const Navbar : React.FunctionComponent = () => {
   return (
    <nav>
        <div className="nav-wrapper indigo px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
             <ul className="right hide-on-med-and-down">
                 <li><a href="/">Tasks</a></li>
                 <li><a href="/">About us</a></li>
             </ul>
        </div>
    </nav>
    )  
}

export default Navbar;