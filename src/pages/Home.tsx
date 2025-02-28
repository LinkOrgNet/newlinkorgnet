import { Box } from "@mui/material";
import { FAQs } from "../components/Home/FAQs";
import { AboutSection } from "../components/Home/About";
import { ServiceCards } from "../components/Home/ServiceCards"
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";



const Home = () => {
  return (
    <Box>
      <ServiceCards />
      <Box marginTop="30px">
        <FAQs />
      </Box>
      <Box marginTop="30px">
        <AboutSection />
      </Box>
      <Box marginTop="30px">
        <PreFooter />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home;