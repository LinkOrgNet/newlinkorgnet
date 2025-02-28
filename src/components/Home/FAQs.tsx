import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 4, p: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Button variant="contained" sx={{ background: "#f5f5f5", color: "#000", mb: 2 }}>
          💡 Frequently Asked Questions
        </Button>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FF6600" }}>
          We answered your <span style={{ color: "#000" }}>questions</span> so you don’t even have to ask!
        </Typography>
        <Button variant="text" sx={{ mt: 2, color: "#0047AB", textTransform: "none" }}>
          Get specific answers about our services →
        </Button>
        {/* Add motion to the SVG icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionsIcon width="70%" />
        </motion.div>
      </Box>
      <Box sx={{ flex: 2 }}>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ color: "#010156" }}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
