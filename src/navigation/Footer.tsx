import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import logoWhite from "../assets/images/logo/logo_white.svg"

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#0C0C26", color: "#fff", p: 6, minHeight: "400px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Newsletter Subscription */}
        <Box sx={{ maxWidth: 500 }} className="footer_subscribe">
          <Box  ml={6}>
          <img src={logoWhite} alt="site logo" className="" width="24%"/>
          <Typography variant="h4" fontWeight="bold" sx={{marginTop: "30px"}}>
            Subscribe to our newsletter
          </Typography>
          <Typography variant="body1" sx={{ my: 1, opacity: 0.7 }}>
            Only important stuff, no spam. We promise!
          </Typography>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Enter your email address"
            sx={{ mt: 2, borderBottom: "1px solid #e65d0f" }}
            InputProps={{ disableUnderline: true, sx: { color: "white" } }}
          />
          <TextField
            fullWidth
            variant="standard"
            placeholder="Enter your phone number (optional)"
            sx={{ mt: 2, borderBottom: "1px solid #e65d0f" }}
            InputProps={{ disableUnderline: true, sx: { color: "white" } }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "white",
              color: "#e65d0f",
              fontWeight: "bold",
              borderRadius: "20px",
              textTransform: "none",
              padding: "10px 20px",
              '&:hover': { backgroundColor: "#f5f5f5" },
            }}
            endIcon={<ArrowForward />}
          >
            Subscribe
          </Button>
          </Box>
        </Box>

        {/* Contact Info */}
        <Box sx={{ maxWidth: 300 }} className="footer_contact">
          <Typography variant="h5" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ my: 1, opacity: 0.7 }}>
            Here are our official communication channels if you have enquiries
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            177B, Sinari Daranijo Street, Victoria Island Lagos
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            info@linkorgnet.com.ng
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            +234 916 000 5465
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            +234 904 142 3631
          </Typography>
        </Box>
      </Box>
      
      {/* Footer Bottom Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          mt: 6,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={require("../assets/images/arrow_footer.png")} alt="arrow" width="7%" style={{ marginRight: "30px"}} />
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; 2025 — Copyright LinkOrg Networks. All rights reserved.
          </Typography>
        </Box>
        <Box sx={{ marginRight: "50px"}}>
          <IconButton sx={{ color: "white" }}>
            <LinkedIn />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <X />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

