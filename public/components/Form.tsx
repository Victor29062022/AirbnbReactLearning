import React, { useState } from "react";
import Card from "./Card"
import Button from "./Button";
type Activity = {
    img: any,
    rating: string,
    descr: string,
    price: string,
    openSpots: number
}

type Activities = {
    activities: Activity[]
}

export default function Form(FormProps : Activities){
    const [randomValue, setRandomValue] = useState<Activity>()
    function handleClick(){
        const RandomNumber = Math.floor(Math.random() * FormProps.activities.length)
        const randomActivity = FormProps.activities[RandomNumber]
        setRandomValue(randomActivity)

    }
    return(
            <div>
            <Button name= "Get an random experience" handleClick={handleClick}/>
            <Card 
            img = {randomValue?.img}  
            rating = {randomValue?.rating}
            price = {randomValue?.price}
            descr = {randomValue?.descr}
            openSpots = {randomValue?.openSpots}
            />
            
            </div>
        
    )
}