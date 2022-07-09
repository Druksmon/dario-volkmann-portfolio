import './Home.css'
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import Work from "../../components/Work/Work";
import AboutMe from "../../components/AboutMe/AboutMe";

const Home = () => {


  return(
      <div className='home-container'>
          <Header/>
          <Services/>
          <Work/>
          <AboutMe/>
      </div>
  )
}

export default Home