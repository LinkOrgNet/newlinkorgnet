import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, Grid } from "@mui/material";

export const AboutSection: React.FC = () => {
  const imageSrc = require("../../assets/images/homeabt.png");
  const rows = 4; 
  const cols = 8; 
  const boxSize = 90;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        bgcolor: "white",
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 800, textAlign: "center" }}>
        {/* Image Grid Effect */}
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{ mb: 3, width: cols * boxSize, height: rows * boxSize }} // Adjusted size
        >
          {[...Array(rows * cols)].map((_, index) => {
            const row = Math.floor(index / cols);
            const col = index % cols;
            return (
              <Grid item key={index} xs={12 / cols}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    width: boxSize,
                    height: boxSize,
                    overflow: "hidden",
                    borderRadius: 8,
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <img
                    src={imageSrc}
                    alt="Decorative"
                    style={{
                      width: cols * boxSize,
                      height: rows * boxSize,
                      objectFit: "cover",
                      objectPosition: `-${col * boxSize}px -${row * boxSize}px`,
                    }}
                  />
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Text Content */}
        <Typography variant="h3" fontWeight="bold" color="primary.dark">
          Get Connected <br />
          <Typography component="span" color="#092277" sx={{ fontSize: "40px"}}>
            Feel Connected
          </Typography>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          LinkOrg Networks is a premier provider of advanced satellite
          communication and IT solutions, dedicated to empowering industries and
          supporting global connectivity.
        </Typography>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 3,
            py: 1.5,
            borderRadius: 8,
            backgroundColor: "#010156",
            "&:hover": { backgroundColor: "#e65d0f" },
          }}
        >
          Learn more about us →
        </Button>
        </motion.div>
      </Box>
    </Box>
  );
};
