import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../../components/config/colors";
import { EmailIcon } from "../../../assets/icon/email";
import { TelIcon } from "../../../assets/icon/tel-icon";
import { SelectIcon } from "../../../assets/icon/select-icon";
import { Login } from "../../../assets/icon/login";
import { Lake } from "../../../assets/icon/lake";
import { Korzinka } from "../../../assets/icon/korzinka";
export const HeaderNav = () => {
  return (
    <>
      <Box bgcolor={Colors.Violet}>
        <Container>
          <Stack py={"10px"} direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} gap={"48px"}>
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <EmailIcon />
                <Typography color="#fff">mhhasanul@gmail.com</Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
                <TelIcon />
                <Typography color="#fff">(12345)67890</Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
              <Typography alignItems={"center"} color="#fff" fontSize={"16px"}>
                English
              </Typography>
                <SelectIcon />
              <Typography color="#fff" fontSize={"16px"}>
                USD
              </Typography>
              <SelectIcon />
              <Typography color="#fff" fontSize={"16px"}>
                Login
              </Typography>
              <Login />
              <Typography color="#fff" fontSize={"16px"}>
                Wishlist
              </Typography>
              <Lake/>
              <Korzinka />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
