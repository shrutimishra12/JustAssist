import React from "react";
import Wrraper from "./Wrraper";
import Dropdown from "./dropdown";
import CardLayout from "./card/CardLayout";

const Home = () => {
  return (
    <Wrraper>
      <CardLayout />
      <Dropdown />
    </Wrraper>
  );
};

export default Home;
