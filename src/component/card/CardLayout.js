import React from "react";
import Card from "./Card";
import "./Card.css";

const CardLayout = () => {
  return (
    <>
      <div className="grid-container">
        <Card
          color="#FF7043" //props
          count="10970755"
          label="Civil Cases"
          cal={false}
        />
        <Card
          color="#9575CD"
          count="33598393"
          label="Criminal Cases"
          cals={false}
        />
        <Card
          color="#26A69A"
          count="44569148"
          label="Total Cases"
          cal={false}
        />
      </div>
      <div className="grid-container">
        <Card
          color="#FF7043"
          count="10970755 (61.16%)"
          label="Civil Cases More Than 1 Year Old."
          cal={true}
        />
        <Card
          color="#9575CD"
          count="33598393 (65.37%)"
          label="Criminal Cases More Than 1 Year Old."
          cal={true}
        />
        <Card
          color="#26A69A"
          count="44569148 (64.33%)"
          label="Total Cases More Than 1 Year Old."
          cal={true}
        />
      </div>
    </>
  );
};

export default CardLayout;
