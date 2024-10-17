import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Colors } from "../../components/config/colors";
import hero from "../../assets/img/hero.png";
import { MenuCard } from "../menu/menu-card";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F0FF",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: Colors.Accent,
  color: "#fff",
  fontSize: "16px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: Colors.Accent,
    opacity: 0.9,
  },
}));

const StyledSmallTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-family)",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "175%",
  color: Colors.Accent,
}));

export const Home = () => {
  return (
    <Box>
      <StyledBox>
        <Container>
          <Stack p="100px" direction="row" alignItems="center" gap="22px">
            <Stack>
              <StyledSmallTypography>
                Best Furniture For Your Castle....
              </StyledSmallTypography>
              <Typography
                maxWidth="400px"
                my="12px"
                variant="h1"
                sx={{ fontWeight: 700 }}
              >
                New Furniture Collection Trends in 2020
              </Typography>
              <Typography mb="24px" variant="body2" maxWidth="559px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </Typography>
              <Stack maxWidth="164px">
                <StyledButton>Shop Now</StyledButton>
              </Stack>
            </Stack>
            <Stack maxWidth="500px">
              <img src={hero} alt="Hero" />
            </Stack>
          </Stack>
        </Container>
      </StyledBox>
      
      <MenuCard />
    </Box>
  );
};
