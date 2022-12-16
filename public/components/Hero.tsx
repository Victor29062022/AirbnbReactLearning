import React from "react";
import Image from 'next/image';
import Airbnb_Activity_Cards from "../../public/img/Airbnb_Activity_Cards.png";

export default function Hero(){
    return(
        <div className="hero">
            <Image className="activityCards" src ={Airbnb_Activity_Cards} alt="activity cards"/>
            <div className="heroText">
                <h2>Online activities</h2>
                <p>Descover our activities while surfing the web. </p>
            </div>
        </div>
    )
}