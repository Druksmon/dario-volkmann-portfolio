import './Header.css'
import formFirst from "../assets/formFirst.svg";
import formSecond from "../assets/formSecond.svg";


const Header = () => {


    return (
        <header >
            <img src={formFirst} className="form-1-header"/>
            <img src={formSecond} className="form-2-header"/>
            <div id='header-container' className='header-container'>
                <div className="header-box-1">
                    <p>Hello, I am</p>
                    <h1>Dario Volkmann</h1>
                    <h3>FRONT END <span>DEVELOPER</span></h3>
                    <hr/>
                    <a href="mailto:dariusvolkmann@gmail.com" target="_blank" className="buttonContact">CONTACT ME</a>
                </div>
                <div className="header-box-2">
                </div>
            </div>
        </header>
    )

}

export default Header