import React from 'react'
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
// import { motion } from "framer-motion";


const TopNav: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "1439px", height: "120px", padding: "35px 120px 37px 119px", justifyContent: "center", alignItems: "center", position: "fixed", opacity: "0.9", background: "#F2F7F8", flexShrink: "0", backdropFilter: "blur(15px") }}>

      <Box sx={{display: "flex", width: "1200px",justifyContent: "spaceBetween",alignItems: "center", flexShrink: "0"  }}>
        <Box sx={{width: "180.001px", height: "40.122px", flexShrink: "0"}}>
        src={require("../../assets/images/logo.svg")}
        </Box>

        {/* <Box sx={{display: "flex", width: "622px", justifyContent: "space-between", alignItems: "center", flexShrink: "0"}}>
        </Box> */}
        <Box style={{width: 622, height: 37, borderRadius: 43.02, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <Box style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 29.26, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <Box style={{width: 49, height: 4, background: '#E75D11', borderRadius: 16}} />
        <Box style={{color: '#E75D11', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20.65, wordWrap: 'break-word'}}>Home</Box>
    </Box>
    <Box style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 29.26, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <Box style={{color: '#010157', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20.65, wordWrap: 'break-word'}}>Residential</Box>
    </Box>
    <Box style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 29.26, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <Box style={{color: '#010157', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20.65, wordWrap: 'break-word'}}>SMEs</Box>
    </Box>
    <Box style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 29.26, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <Box style={{color: '#010157', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20.65, wordWrap: 'break-word'}}>Enterprises</Box>
    </Box>
    <Box style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 29.26, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <Box style={{color: '#010157', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 20.65, wordWrap: 'break-word'}}>Services</Box>
        <Box data-svg-wrapper>
        src={require("../../assets/images/arrow-down.svg")}
        </Box>
    </Box>
</Box>

<Box style={{width: 169, height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, background: '#010157', borderRadius: 64, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
    <Box style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Get started</Box>
    <Box data-svg-wrapper style={{position: 'relative'}}>
    src={require("../../assets/images/arrow-right.svg")}
    </Box>
</Box>

      </Box>

   </Box>
  )
}

export default TopNav  