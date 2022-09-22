import './Services.css'
import iconCoding from '../assets/icons/coding.png'
import iconDesign from '../assets/icons/design.png'
import iconUx from '../assets/icons/user-experience.png'
import iconMore from '../assets/icons/more.png'
import {motion} from "framer-motion";

const Services = () => {
    return (

        <div className="services-container">

            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                        className="services-selector">

                <p><span>Expert </span> In</p>

                <div className="services-boxes">

                    <div className="services-box-1">
                        <div className='services-box-selector'>
                            <img src={iconCoding} alt=""/>
                            <h3>Web Development</h3>
                            <p>I transform your idea into reality. <br/>
                                <a href="#work">Check my projects.</a></p>
                        </div>
                    </div>

                    <div className="services-box-2">
                        <div className="services-box-selector">
                            <img src={iconDesign} alt=""/>
                            <h3>Design</h3>
                            <p>Designs that suit your needs.<br/>
                                <a target='_blank'  rel="noreferrer"  href="https://www.behance.net/dariovolkmann">Check my designs.</a>
                            </p>
                        </div>
                    </div>

                    <div className="services-box-3">
                        <div className="services-box-selector">
                            <img src={iconUx} alt=""/>
                            <h3>UX/UI </h3>
                            <p>Easy to navigate.</p>
                        </div>
                    </div>
                    <div className="services-box-4">
                        <div className="services-box-selector">
                            <img src={iconMore} alt=""/>
                            <h3>More</h3>
                            <p>Looking for something different? let's talk.
                            </p>
                        </div>
                    </div>


                </div>
            </motion.div>
        </div>
    )
}

export default Services