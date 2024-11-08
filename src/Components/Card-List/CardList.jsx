import React from "react";
import "./CardList.Styles.css";
import Card from "../Card/Card";

export default function CardList(props) {
  return (
    <div className="cardlist">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
