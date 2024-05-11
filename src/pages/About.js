import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Irure consectetur cupidatat qui eiusmod sit voluptate enim aliqua
          aliquip. Sint pariatur ut aute elit consectetur culpa elit. Duis sunt
          id id anim sit eu elit aliquip quis sunt culpa voluptate in. Deserunt
          consectetur voluptate dolore adipisicing officia veniam elit quis
          labore duis ea consectetur amet aliqua. Pariatur cillum excepteur aute
          do. Lorem commodo commodo minim laboris exercitation. Occaecat ex
          nulla occaecat enim sint veniam.
        </p>
        <br />
        <p>
          Laboris fugiat aute enim sit sit laboris dolore culpa et labore
          nostrud laborum commodo. Tempor ea qui Lorem occaecat commodo aute
          sint eiusmod est in irure magna commodo. Est proident id ex consequat.
          Aliquip incididunt minim dolore minim amet veniam proident est eu
          dolor minim. Sint fugiat mollit consequat consectetur nisi do enim
          fugiat non incididunt voluptate ullamco sit eu. Ut adipisicing in sunt
          enim.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
