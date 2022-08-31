import './Nav.css'
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";


const Nav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        {
            window.scrollY >= 10 ? setColor(true) : setColor(false)
        }
    }
    const closeIfIsOpen = () => {
        if (isNavExpanded === true) {
            setIsNavExpanded(!isNavExpanded)
        }
    }

    window.addEventListener('scroll', changeColor)

    // return (

    return (
        <>
            <motion.nav initial={{opacity: 0}} animate={{opacity: 1}}
                        transition={{type: 'tween', delay: 0.4, duration: 0.9}}
                        className={color ? 'navigation-scroll' : 'navigation'}>
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

                    <motion.div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                        <AnimatePresence>
                            <motion.ul initial={{opacity: 0, y: -50}} whileInView={{opacity: 1, y: 0}}
                                       exit={{opacity: 0, y: -50}}
                                       transition={{type: 'tween', duration: 0.2}}>
                                <li>
                                    <a href='#header-container' onClick={closeIfIsOpen}>HOME</a>
                                </li>
                                <li>
                                    <a href='#about-container' onClick={closeIfIsOpen}>ABOUT ME</a>
                                </li>
                                <li>
                                    <a target='_blank' href="mailto:dariusvolkmann@gmail.com">CONTACT ME </a>
                                </li>
                            </motion.ul>
                        </AnimatePresence>
                    </motion.div>


                </div>

            </motion.nav>
        </>
    )


}

export default Nav

