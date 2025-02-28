import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button, Grid } from "@mui/material";
import PlusIcon from "../../assets/images/icons/plus.png";
import { motion } from "framer-motion";
import { ReactComponent as QuestionsIcon } from "../../assets/images/svg/questions.svg";

const faqData = [
  { question: "Who does LinkOrg Networks serve?", answer: "We serve businesses, maritime industries, and offshore operations." },
  { question: "What internet services does LinkOrg Networks offer?", answer: "We provide VSAT, fiber optics, and LEO/GEO satellite solutions." },
  { question: "How does LinkOrg Networks prioritise customer satisfaction?", answer: "By offering 24/7 support, tailored solutions, and high-reliability services." },
  { question: "What sets LinkOrg Networks apart from other service providers?", answer: "Our hybrid technology approach, global reach, and industry expertise." },
  { question: "Does LinkOrg Networks offer customised solutions for businesses?", answer: "Yes, we provide tailored connectivity solutions based on client needs." },
  { question: "How does LinkOrg Networks benefit me as an individual?", answer: "We offer seamless connectivity, reliable internet, and dedicated support." }
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}> {/* Center the content with margins on both sides */}
        <Grid 
          container 
          spacing={4} 
          alignItems="stretch" 
          justifyContent="space-between" 
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Button 
              variant="contained" 
              sx={{ background: "#D4D5DF", color: "#010156", mb: 2, textTransform: "capitalize" }}
            >
              <img 
                src={require("../../assets/images/icons/message-question.png")} 
                alt="message question"
                width="7%"
              /> 
              &nbsp;Frequently Asked Questions
            </Button>
            <Typography variant="h4" sx={{ fontWeight: "semibold", color: "#E65D0F" }}>
              We answered your <span style={{ color: "#010156" }}>questions</span> so you don’t even have to ask!
            </Typography>
            <Button variant="text" sx={{ mt: 2, color: "#0047AB", textTransform: "none" }}>
              Get specific answers about our services →
            </Button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <QuestionsIcon width="100%" style={{ maxWidth: "240px" }} />
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{ width: "100%" }}
              >
                <Accordion 
                  expanded={expanded === `panel${index}`} 
                  onChange={handleChange(`panel${index}`)} 
                  sx={{ minHeight: "75px", backgroundColor: "#F9F9FC", width: "100%" }}
                >
                  <AccordionSummary 
                    expandIcon={<img src={PlusIcon} alt="expand" width="20px" />} 
                    sx={{ minHeight: "75px", display: "flex", alignItems: "center" }}
                  >
                    <Typography sx={{ color: "#010156" }}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#010156" }}>{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
