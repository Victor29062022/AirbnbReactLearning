import React from "react";
import Navbar from "../public/components/Navbar";
import Hero from "../public/components/Hero";
import Card from "../public/components/Card";
import CardDisplay from "../public/components/CardDisplay"
import activities from "../public/data/activities.js"
import Filter from "../public/components/Filter"
import Form from "../public/components/Form"
import TestWorkSpace from "../public/components/TestWorkSpace"
export default function Home() {
    const cards = activities.map(item => {
        return (
            <Card
            {...item}
            />
        )
    })
    return (
      <div className="app">
      <Navbar />
      <Hero />
      <Filter />
      <div style= {{ display: "flex"}}>
      {cards}
      </div>
      <Form activities={activities}/>
      {/* <TestWorkSpace /> */}
      {/* https://www.youtube.com/watch?v=bMknfKXIFA8&t=28100s la ora 7h:48min*/}
      
      </div>
  )
}
