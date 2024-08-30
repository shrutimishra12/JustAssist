import React from "react";
import {
 Box,
 Grid,
 TextField,
 Button,
 Typography,
 IconButton,
} from "@mui/material";
import {
 Email,
 Phone,
 Instagram,
 Facebook,
 LinkedIn,
} from "@mui/icons-material";
import "./ContactUs.css"; // Import CSS file for balloon animation


const ContactUs = () => {
 return (
   <Box
     sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       minHeight: "100vh",
       bgcolor: "#f2f2f2",
       padding: 4,
     }}
   >
     {/* Text Above the Card */}
     <Typography variant="h6" sx={{ mb: 3, color: "#333", mt: 8 }}>
       Any Question or Remarks? Just write us a message
     </Typography>


     {/* Card Container */}
     <Box
       sx={{
         width: "60%",
         display: "flex",
         boxShadow: 3,
         borderRadius: 2,
         overflow: "hidden",
         bgcolor: "white",
       }}
     >
       {/* Left Side - Contact Information */}
       <Box
         sx={{
           bgcolor: "#2d0032",
           color: "white",
           p: 4,
           width: "40%",
           position: "relative",
         }}
       >
         <Typography variant="h5" gutterBottom>
           Contact Information
         </Typography>
         <Typography variant="body2" sx={{ mb: 3 }}>
           Fill up the form and our team will get back to you within 24 hours.
         </Typography>
         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
           <Phone sx={{ mr: 1 }} />
           <Typography variant="body2">+233543201893</Typography>
         </Box>
         <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
           <Email sx={{ mr: 1 }} />
           <Typography variant="body2">justassist@gmail.com</Typography>
         </Box>


         {/* Balloon animation above the social icons */}
         <div className="balloon-animation"></div>


         {/* Social Icons */}
         <Box
           sx={{
             display: "flex",
             justifyContent: "center",
             position: "absolute",
             bottom: 20,
             left: 0,
             right: 0,
           }}
         >
           <IconButton href="#" sx={{ color: "white", mr: 1 }}>
             <Instagram />
           </IconButton>
           <IconButton href="#" sx={{ color: "white", mr: 1 }}>
             <Facebook />
           </IconButton>
           <IconButton href="#" sx={{ color: "white" }}>
             <LinkedIn />
           </IconButton>
         </Box>
       </Box>


       {/* Right Side - Form */}
       <Box sx={{ p: 4, width: "60%", bgcolor: "white" }}>
         <form>
           <Grid container spacing={2}>
             <Grid item xs={12}>
               <TextField fullWidth label="Name" variant="outlined" />
             </Grid>
             <Grid item xs={12}>
               <TextField fullWidth label="Email" variant="outlined" />
             </Grid>
             <Grid item xs={12}>
               <TextField fullWidth label="Phone" variant="outlined" />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 fullWidth
                 label="Message"
                 variant="outlined"
                 multiline
                 rows={4}
               />
             </Grid>
             <Grid item xs={12}>
               <Button
                 fullWidth
                 variant="contained"
                 sx={{
                   bgcolor: "#2d0032",
                   color: "white",
                   "&:hover": { bgcolor: "#400040" },
                 }}
               >
                 Send Message
               </Button>
             </Grid>
           </Grid>
         </form>
       </Box>
     </Box>
   </Box>
 );
};


export default ContactUs;





