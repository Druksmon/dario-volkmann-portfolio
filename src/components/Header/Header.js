import './Header.css'
import formFirst from "../assets/formFirst.svg";
import formSecond from "../assets/formSecond.svg";
import {motion} from "framer-motion";


const Header = () => {


    return (
        <header>
            <img src={formFirst} className="form-1-header" alt='svg'/>
            <img src={formSecond} className="form-2-header" alt='svg'/>
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
                <div className="header-box-2">
                </div>
            </div>
        </header>
    )

}

export default Header