import About from "../About/About"
import Footer from "../Footer/Footer"
import Service from "../Service/Service"
import Tracking from "../Tracking/Tracking"
import Feature from "./Feature"
import Hero from "./Hero"


const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <Service />
        <About />
        <Tracking />
        <Footer />
    </div>
  )
}

export default Home