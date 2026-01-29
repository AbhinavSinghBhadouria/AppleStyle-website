import React from 'react'
import { navLinks } from '../constants';
const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo"/>
            <ul>
                {navLinks.map(({label})=>(       // yha pr hmne jo function calll kiya hai but hmne curly braces nhi lgaye kyu ki agr hmm curly braces lgate h to return krna pdta h and agr hmm direct parenthesis lgate h to vo automatically return ho jata haii
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search"/>
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart"/>
                </button>
            </div>

        </nav>
    </header>
  )
}

export default Navbar