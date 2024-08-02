import "../styles/style.css"
import FirstSection from "../components/FirstSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reviews from "../components/Reviews"
import SecondSection from "../components/SecondSection"
import ThirdSection from "../components/ThirdSection"
import Title from "../components/Title"

export default function Main() {
  return (
    <div>
      <div className="banner">
        <header>
          <Navbar />
          <Title />
        </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#0099ff" fillOpacity="1" d="M0,64L80,64C160,64,320,64,480,74.7C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Reviews />
      <Footer />
    </div>
  )
}

