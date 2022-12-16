import React from "react";
import { useState } from "react";
import Button from "./Button";

// TO DO: At the moment no functionality exept saving the input from the user in a state is done
export default function SearchForm(){
   const [data, setData] = useState(null)

    function getData(event){
        setData(event.target.value)
    }
    return(
        <div className="filter">
            <div>
                <input type="text" onChange={getData}/>
            </div>
        <Button name ="Search"/> 
      </div>
    )
}