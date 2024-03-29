import './Header.css'
import {motion} from "framer-motion";


const Header = () => {

    return (
        <header>

            {/*DARIO VOLKMANN PORTFOLIO*/}

            <div id='header-container' className='header-container'>
                <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
                            transition={{type: 'tween', delay: 0.2, duration: 0.5}} className="header-box-1">
                    <p>Hello, I am</p>
                    <h1>Dario Volkmann</h1>
                    <h3>FRONT END <span>DEVELOPER</span></h3>
                    <hr/>
                    <motion.a
                        href="mailto:dariusvolkmann@gmail.com"
                        target="_blank"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 1.05}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                        className="buttonContact">
                        CONTACT ME
                    </motion.a>
                </motion.div>
                <div className="header-box-2"/>
            </div>
        </header>
    )

}

export default Header