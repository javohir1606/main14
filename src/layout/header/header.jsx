import React from "react";
import { HeaderNav } from "./haeder-nav/header-nav";
import { Box, Container, Link, Stack, TextField } from "@mui/material";
import img from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
export const Header = () => {
  return (
    <>
      <HeaderNav />
      <Box py={"24px"}>
        <Container>
          <Stack direction={"row"} gap={"88px"} alignItems={"center"}>
            <Stack maxWidth={"98px"}>
              <img src={img} alt="" />
            </Stack>
            <Stack direction={"row"} gap={"35px"} alignItems={"center"}>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#ff6347",
                  fontSize: "16px",
                }}
              >
                Home
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#0d0e43",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff6347",
                  },
                }}
              >
                Pages
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#0d0e43",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff6347",
                  },
                }}
              >
                Products
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#0d0e43",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff6347",
                  },
                }}
              >
                Blog
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#0d0e43",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff6347",
                  },
                }}
              >
                Shop
              </Link>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontWeight: "400",
                  color: "#0d0e43",
                  fontSize: "16px",
                  "&:hover": {
                    color: "#ff6347",
                  },
                }}
              >
                Contact
              </Link>
            </Stack>
            <Stack position={"relative"}>
              <TextField />
              <Stack
                borderColor={"#1d8752"}
                maxWidth={"30px"}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#fb2e86",
                    width: "40px",
                    height: "57px",
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                  }}
                >
                  <img
                    src={search}
                    alt="Search"
                    style={{
                      width: "24px", 
                      height: "24px",
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
