import './Nav.css'
import {useState} from "react";


const Nav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        {
            window.scrollY >= 10 ? setColor(true) : setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // return (

    return (
        <>
            <nav className={color ? 'navigation-scroll' : 'navigation'}>
                <div className='navigation-selector'>

                    <a href='#header-container' className="brand-name">
                        <h1>dA</h1>
                    </a>
                    <button
                        className="hamburger"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    >
                        {/* icon from Heroicons.com */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className={
                            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                        }
                    >
                        <ul>
                            <li>
                                <a href='#header-container'>HOME</a>
                            </li>
                            <li>
                                <a href='#about-container'>ABOUT ME</a>
                            </li>
                            <li>
                                <a target='_blank' href="mailto:dariusvolkmann@gmail.com">CONTACT ME </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )


}

export default Nav

