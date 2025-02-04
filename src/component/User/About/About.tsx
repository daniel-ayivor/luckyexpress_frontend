import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import AboutCards from "./components/about/AboutCards"
import Stats from "./components/about/Stats"
import Story from "./components/about/Story"


const About = () => {
  return (
    <div>
   <Navbar />
    <Stats />
 <Story />
 <AboutCards />
 <Footer />
    </div>
  )
}

export default About