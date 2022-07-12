import './Home.css'
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import Work from "../../components/Work/Work";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";

const Home = () => {


  return(
      <div className='home-container'>
          <Header/>
          <Services/>
          <Skills/>
          <Work/>
          <AboutMe/>
      </div>
  )
}

export default Home