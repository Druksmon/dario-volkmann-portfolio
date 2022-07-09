import './Services.css'
import iconCoding from '../assets/icons/coding.png'
import iconDesign from '../assets/icons/design.png'
import iconUx from '../assets/icons/user-experience.png'
import iconMore from '../assets/icons/more.png'
import formFirst from "../assets/formFirst.svg";
import formSecond from "../assets/formSecond.svg";

const Services = () => {
    return (

        <div className="services-container">
            <img src={formFirst} className="form-1-services"/>
            <img src={formSecond} className="form-2-services"/>
            <div className="services-selector">

                <p>My <span>Services</span></p>

                <div className="services-boxes">

                    <div className="services-box-1">
                        <div className='services-box-selector'>
                            <img src={iconUx} alt=""/>
                            <h3>Web Developer</h3>
                            <p>I transform your idea into reality.</p>
                        </div>
                    </div>

                    <div className="services-box-2">
                        <div className="services-box-selector">
                            <img src={iconDesign} alt=""/>
                            <h3>UX/UI</h3>
                            <p>Always easy to navigate.</p>
                        </div>
                    </div>

                    <div className="services-box-3">
                        <div className="services-box-selector">
                            <img src={iconCoding} alt=""/>
                            <h3>Design</h3>
                            <p>Custom designs from scratch.</p>
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
            </div>
        </div>
    )
}

export default Services