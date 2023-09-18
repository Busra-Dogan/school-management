import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color="#e0e0e0"
        fontWeight="bold"
        sx={{ m: "80px 20px 5px 10px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#4cceac" sx={{ m: "0 20px 5px 10px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
