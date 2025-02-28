import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const PreFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
        textAlign: "center",
        backgroundColor: "#e65d0f",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Circles */}
      {[1, 2, 3].map((circle, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            top: `${index * 30}%`,
            left: `${index * 15}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Hero Text */}
      <Typography variant="h3" fontWeight="bold" sx={{ maxWidth: "800px", zIndex: 2 }}>
        Unlock Seamless Internet Connectivity for you today
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: "600px", zIndex: 2 }}>
        Choose mind-blowing internet speed, stable networks, affordability and
        custom services tailored for you today. Contact us now to get started!
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 3,
          backgroundColor: "white",
          color: "#c45226",
          fontWeight: "bold",
          borderRadius: "20px",
          textTransform: "none",
          padding: "10px 20px",
          '&:hover': { backgroundColor: "#f5f5f5" },
        }}
      >
        Get started
      </Button>
    </Box>
  );
};

