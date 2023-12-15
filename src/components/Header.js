import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle, width }) => {
  return (
    <Box mb="30px" width={width}>
      <Typography
        variant="h2"
        color="#e0e0e0"
        fontWeight="bold"
        sx={{ m: "30px 20px 5px 5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#4cceac" sx={{ m: "0 20px 5px 5px" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
