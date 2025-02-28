import { Box, Typography, TextField, Button, Stack, InputAdornment } from "@mui/material";
import { Email, Phone, ArrowForward, Facebook, Twitter, Instagram } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "#0A0A23",
      color: "white",
      padding: "4rem 2rem",
      display: "flex",
      flexDirection: "column",
      gap: 4,
    }}>
      {/* Newsletter Section */}
      <Box sx={{ maxWidth: "600px" }}>
        <Typography variant="h4" fontWeight={600}>Subscribe to our newsletter</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, marginBottom: 2 }}>
          Only important stuff, no spam. We promise!
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email address"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 1,
            input: { color: "white" },
            marginBottom: 2,
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your phone number (optional)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 1,
            input: { color: "white" },
            marginBottom: 2,
          }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FF6B00", color: "white", borderRadius: "20px", padding: "10px 20px" }}
          endIcon={<ArrowForward />}
        >
          Subscribe
        </Button>
      </Box>

      {/* Contact Section */}
      <Box>
        <Typography variant="h5" fontWeight={600}>Contact Us</Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, marginBottom: 2 }}>
          Here are our official communication channels if you have enquiries:
        </Typography>
        <Typography variant="body2">177B, Sinari Daranijo Street, Victoria Island Lagos</Typography>
        <Typography variant="body2">info@linkorgnet.com.ng</Typography>
        <Typography variant="body2">+234 916 000 5465</Typography>
        <Typography variant="body2">+234 904 142 3631</Typography>
      </Box>

      {/* Social and Copyright Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", paddingTop: 2 }}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © 2025 — Copyright LinkOrg Networks. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Facebook sx={{ cursor: "pointer" }} />
          <Instagram sx={{ cursor: "pointer" }} />
          <Twitter sx={{ cursor: "pointer" }} />
        </Stack>
      </Stack>
    </Box>
  );
};

