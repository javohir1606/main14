import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Colors } from "../../components/config/colors";
import hero from "../../assets/img/hero.png";
import { Data, ProductsData } from "../../components/Data/data";
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
      <Box pt={"130px"} pb={"100px"}>
        <Typography variant="h2" textAlign={"center"} mb={"48px"}>
          Featured Products
        </Typography>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          gap={"30px"}
          alignItems={"center"}
        >
          {Data.map((item) => (
            <Box
              key={item.title}
              textAlign={"center"}
              sx={{
                "&:hover": {
                  bgcolor: "#2f1ac4",
                  color: "white",
                },
              }}
            >
              <Box
                bgcolor={"#f6f7fb"}
                pt={"41px"}
                pl={"41px"}
                pr={"54px"}
                pb={"20px"}
              >
                <img src={item.img} alt="img" />
              </Box>
              <Box
                bgcolor={"#f9f8f8"}
                pt={"15px"}
                pb={"17px"}
                sx={{
                  "&:hover": {
                    color: "#fff",
                    bgcolor: "#2f1ac4",
                  },
                }}
              >
                <Typography mb={"12px"} variant="h3">
                  {item.title}
                </Typography>
                <img src={item.desc} alt="img" />
                <Typography mt={"12px"} mb={"12px"} variant="body2">
                  {item.description}
                </Typography>
                <Typography variant="body2">${item.precs}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Container>
          <h2
            sx={{
              fontWeight: 700,
              fontSize: 42,
              color: "#151875",
            }}
          >
            Leatest Products
          </h2>
          <Box>
            <Stack>
              {ProductsData.map((item) => (
                <Box width={"223px"}>
                  <img src={item.img} alt="" />
                  <Stack>
                    <Typography>{item.title}</Typography>
                    <Stack>
                      <Typography variant="subtitle1">{item.precs}</Typography>
                      <Typography variant="subtitle1">{item.aksiya}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
