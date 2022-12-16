import React from "react";
import CardsArray from "../data/activities.js";
import Card from "./Card"
import Biking from "../../public/img/Biking.png"
import Fishing from "../../public/img/Fishing.png"
import Katie_Zaferes from "../../public/img/Katie_Zaferes.png"
import SkyDiving from "../../public/img/SkyDiving.png"


//THIS DOES NOT WORK FOR SOME REASON. TS GIVES AN ERROR SAYING 
// THAT CARDDISPLAY CANNOT BE USED AS AN JSX ELEMENT BECAUSE IT 
// RETURNS VOID. SOMEHOW THE BELOW CODE WORKS IN THE INDEX.TSX.

export default function CardDisplay() {
  
  const data = CardsArray.map(card => {
    return(
    <Card 
      img={card.img}
      rating ={card.rating}
      descr={card.descr}
      price={card.price}
      openSpots = {card.openSpots}
    />)
  });
}