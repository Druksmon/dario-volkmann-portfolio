import './AboutMe.css'
import linkedin from '../assets/icons/linkedin.png'
import email from '../assets/icons/gmail.png'
import github from '../assets/icons/github.png'
import cv from '../assets/icons/cv.png'
import cvPdf from '../assets/CV.pdf'
import {motion} from "framer-motion";

const AboutMe = () => {
    return (

        <div id='about-container' className="about-container">
            <motion.div  initial={{opacity: 0, y: 50}}
                         whileInView={{opacity: 1, y: 0}}
                         viewport={{once: true}}
                         transition={{  duration: 0.5}} className="about-selector">
                <div className="about-box-1">
                    <h6>ABOUT <span>ME</span></h6>
                    <p>Self-Taught Front-End Developer located in Córdoba, Argentina.<br/>
                        Passionate about technology and design, I intend to create beautiful sites for you. <br/>
                        I'm currently using HTML, CSS, REACT & more.
                      </p>
                    <p>We Should work together.</p>
                </div>
                <div className="about-box-2">
                    <h6>CONTACT <span>ME</span></h6>
                    <div className="contact-list">
                        <a target='_blank' href="https://www.linkedin.com/in/dariovolk/">
                            <img src={linkedin} alt=""/>
                            <p>LINKEDIN</p>
                        </a>
                        <a target='_blank' href="mailto:dariusvolkmann@gmail.com">
                            <img src={email} alt=""/>
                            <p>EMAIL</p>
                        </a>
                        <a target='_blank' href="https://github.com/Druksmon">
                            <img src={github} alt=""/>
                            <p>GITHUB</p>
                        </a>
                        <a target='_blank' href={cvPdf} download='CV 2022'>
                            <img src={cv} alt=""/>
                            <p>CV</p>
                        </a>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default AboutMe