import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import About_Us from "./About_Us"

import Stats from "./components/about/Stats"
import Story from "./components/about/Story"
import Testimony from "./components/about/Testimony"



const About = () => {

  return (
    <div>
   <Navbar />
   <About_Us />
    <Stats />
 <Story />
 <Testimony />
 <Footer />
    </div>
  )
}

export default About