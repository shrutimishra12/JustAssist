import React from "react";
import Card from "./Card";
import "./Card.css";

const CardLayout = () => {
  return (
    <>
      <div className="grid-container">
        <Card
          color="#E90074" //props
          count="10970755"
          label="Civil Cases"
          cal={false}
        />
        <Card
          color="#180161"
          count="33598393"
          label="Criminal Cases"
          cals={false}
        />
        <Card
          color="#134B70"
          count="44569148"
          label="Total Cases"
          cal={false}
        />
      </div>
      <div className="grid-container">
        <Card
          color="#C40C0C"
          count="10970755 (61.16%)"
          label="Civil Cases More Than 1 Year Old."
          cal={true}
        />
        <Card
          color="#FC4100"
          count="33598393 (65.37%)"
          label="Criminal Cases More Than 1 Year Old."
          cal={true}
        />
        <Card
          color="Gold"
          count="44569148 (64.33%)"
          label="Total Cases More Than 1 Year Old."
          cal={true}
        />
      </div>
    </>
  );
};

export default CardLayout;
