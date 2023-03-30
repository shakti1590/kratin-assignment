import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [hamburger, setHamburger] = useState("hidden")

    const handleHamburger = () => {
        if (hamburger === "hidden") {
            setHamburger("visible")
        } else {
            setHamburger("hidden")
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md ">
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700">
                <div className="flex justify-center align-middle text-3xl text-green-600 pl-4 "><Link
                    to="./">Healthify</Link>
                </div>
                {/* <!-- Hamburger --> */}
                <svg onClick={handleHamburger} xmlns="http://www.w3.org/2000/svg" id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block text-green-600" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <div className={`${hamburger} w-full md:flex md:items-center md:w-auto justify-center`} id="menu">
                    <ul className="pt-4 text-md text-green-600 md:flex md:pt-0">
                        <li onClick={handleHamburger}>
                            <Link id="home-btn"
                                className="md:p-4 py-2 ml-2 block hover:text-green-800" to="/">Home</Link>
                        </li>
                        <li onClick={handleHamburger}>
                            <Link id="home-btn"
                                className="md:p-4 py-2 ml-2 block hover:text-green-800 " to="/diet">Diet</Link>
                        </li>
                        <li onClick={handleHamburger}>
                            <Link id="home-btn"
                                className="md:p-4 py-2 ml-2 block hover:text-green-800 " to="/yoga">Yoga & Exercise</Link>
                        </li>
                        {/* <li onClick={handleHamburger}>
                            <Link id="home-btn"
                                className="md:p-4 py-2 ml-2 block hover:text-green-800 " to="/entertainment">Entertainment</Link>
                        </li> */}
                        <li onClick={handleHamburger}>
                            <Link id="watchlist-btn" className="md:p-4 py-2 ml-2 mr-2 block hover:text-green-800"
                                to="/bmi">BMI</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header