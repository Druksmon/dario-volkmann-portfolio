import './Work.css'
import formFirst from "../assets/formFirst.svg";


const Work = () => {
    return (

        <div className="work-container">
            <img src={formFirst} className="form-1-work"/>

            <div className="work-selector">
                <p>My <span>Work</span></p>
                <div className="work-boxes">
                    <div className="work-box-1">
                        <div className="work-img-1">
                            <div className="work-hover-1">
                                <p>Advanced functional store with shopping cart. <br/>
                                    Made with context, firebase, router. <br/>
                                    Coderhouse course final project. <br/>
                                    Design from scratch.
                                </p>
                            </div>
                        </div>
                        <h4>Shop App</h4>
                        <p>REACT APP</p>
                        <div className="work-buttons-hover">
                            <a className='not-allowed-cursor'>READY SOON </a>
                            <a className='not-allowed-cursor'>READY SOON </a>
                        </div>
                    </div>
                    <div className="work-box-2">
                        <div className="work-img-2">
                            <div className="work-hover-2">
                                <p>Yoga advertising page. <br/>
                                    Design from scratch.
                                </p>
                            </div>
                        </div>
                        <h4>Yoga Hansa</h4>
                        <p>REACT APP</p>
                        <div className="work-buttons-hover">
                            <a target='_blank' href='https://yoga-hansa.web.app/'>WEB > </a>
                            <a target='_blank' href='https://github.com/Druksmon/yoga-hansa'>CODE > </a>
                        </div>
                    </div>
                    <div className="work-box-3">
                        <div className="work-img-3">
                            <div className="work-hover-3">
                                <p>Weather application with dynamic backgrounds. <br/>
                                    Made with context, and api consumption. <br/>
                                    Design from scratch.
                                </p>
                            </div>
                        </div>
                        <h4>The weather app</h4>
                        <p>React App</p>
                        <div className="work-buttons-hover">
                            <a target='_blank' href='https://weather-app-react-2022.web.app/'>WEB > </a>
                            <a target='_blank' href='https://github.com/Druksmon/Weather-App-React'>CODE ></a>
                        </div>
                    </div>
                    <div className="work-box-4">
                        <div className="work-img-4">
                            <div className="work-hover-4">
                                <p>Portfolio made with React. <br/>
                                    Design from scratch.</p>
                            </div>
                        </div>
                        <h4>Portfolio React</h4>
                        <p>React App</p>
                        <div className="work-buttons-hover">
                            <a className='not-allowed-cursor'>WEB ></a>
                            <a target='_blank' href='https://github.com/Druksmon/dario-volkmann-portfolio'>CODE ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work