import { FAQs } from "../components/Home/FAQs";
import { AboutSection } from "../components/Home/About";
import { ServiceCards } from "../components/Home/ServiceCards"
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";



const Home = () => {
  return (
    <div>
      <ServiceCards />
      <FAQs />
      <AboutSection />
      <PreFooter />
      <Footer />
    </div>
  )
}

export default Home;