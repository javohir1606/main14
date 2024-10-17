import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { Data } from '../../components/Data/data';

export const MenuCard = () => {
  return (
    <>
      <Box pt={"100px"} pb={"50px"}>
        <Container>
          <h1 style={{textAlign: "center", fontSize: "42px", fontWeight: "700"}}>Featured Products</h1>
          <Stack  sx={{display:"flex"}}>
            {Data.map((item) => (
              <Box>
              <Box key={item.id} sx={{border:"2px solid red", width:"270px", p:"40px"}}>
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <img src={item.desc} alt="" />
                <p>{item.description}</p>
                <p>{item.price}</p>
              </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
