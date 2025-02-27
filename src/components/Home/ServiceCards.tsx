import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

export const ServiceCards: React.FC = () => {
  return (
    <Box sx={{ padding: 4, border: "2px dashed #3f9bff", borderRadius: "8px" }}>
      {/* Highspeed Internet */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: "16px", display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ backgroundColor: "#fff", padding: 1, borderRadius: "50%" }}>
                  <img src={require("../../assets/images/icons/highspeed.png")} alt="highspeed" />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Highspeed Internet
                </Typography>
              </Box>
              <Typography sx={{ color: "#616161", marginTop: 2 }}>
                Experience lightning-fast, reliable internet tailored just for you. Whether you’re streaming,
                working, or gaming, our high-speed internet keeps you seamlessly connected to the world.
              </Typography>
              {/* Highspeed image with float effect */}
              <motion.img
                src={require("../../assets/images/highspeed.png")}
                alt="Speed Chart"
                style={{ marginTop: 16, borderRadius: "8px" }}
                whileHover={{ y: -50 }} // Increased float distance
                transition={{ type: "spring", stiffness: 80, damping: 25 }} // Smoother transition
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Complete Anonymity */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: "16px", display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ backgroundColor: "#fff", padding: 1, borderRadius: "50%" }}>
                  <img src={require("../../assets/images/icons/anonymity.png")} alt="anonymity" />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Complete Anonymity
                </Typography>
              </Box>
              <Typography sx={{ color: "#616161", marginTop: 2 }}>
                Ensure encrypted, high-performance remote access for your workforce, safeguarding critical data
                and maintaining seamless connectivity across global locations.
              </Typography>
              <Box sx={{ marginTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box
                  sx={{
                    "&:hover": {
                      content: 'url(../../assets/images/tonaija.png)',
                    }
                  }}
                >
                  <img src={require("../../assets/images/uk.png")} alt="UK" />
                </Box>
                {/* Latency image floats up */}
                <motion.img
                  src={require("../../assets/images/latency.png")}
                  alt="Latency Icon"
                  whileHover={{ y: -100 }} // Increased float distance
                  transition={{ type: "spring", stiffness: 80, damping: 25 }} 
                />
                {/* Record data image floats left */}
                <motion.img
                  src={require("../../assets/images/recordData.png")}
                  alt="Data Record Icon"
                  whileHover={{ x: -100 }} // Increased float distance
                  transition={{ type: "spring", stiffness: 80, damping: 25 }} // Smoother transition
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Crystal-Clear Internet Calls */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3, borderRadius: "16px" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ backgroundColor: "#FF7043", color: "#fff", padding: 1, borderRadius: "50%" }}>
                  <img src={require("../../assets/images/icons/calls.png")} alt="clear calls" />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Crystal-Clear Internet Calls
                </Typography>
              </Box>
              <Typography sx={{ color: "#616161", marginTop: 2 }}>
                Revolutionize your communication with our crystal-clear VoIP solutions. Say goodbye to traditional
                phone lines and enjoy cost-effective, feature-rich calls that enhance your personal or business communication.
              </Typography>
              <img
                src="/voip-map.png"
                alt="VoIP Map"
                style={{ marginTop: 16, borderRadius: "8px" }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Are you Off-Grid? Stay Connected */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: "16px" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ backgroundColor: "#FF7043", color: "#fff", padding: 1, borderRadius: "50%" }}>
                  <img src={require("../../assets/images/icons/offgrid.png")} alt="Off grid" />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Are you Off-Grid? Stay Connected
                </Typography>
              </Box>
              <Button href="#" sx={{ marginTop: 2, color: "#1976D2" }}>
                Discover more →
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Store & Handle Data with Ease */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ boxShadow: 3, borderRadius: "16px" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ backgroundColor: "#FF7043", color: "#fff", padding: 1, borderRadius: "50%" }}>
                  <img src={require("../../assets/images/icons/handleData.png")} alt="Handle data" />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Store & Handle Data with Ease
                </Typography>
              </Box>
              <Typography sx={{ color: "#616161", marginTop: 2 }}>
                Cloud-based servers with zero downtime.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
