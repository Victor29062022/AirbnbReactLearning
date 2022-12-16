import React, {useState} from "react"
import { render } from "react-dom";
import SearchForm from "./SearcForm"
export default function WorkSpace(){
    const [data, setData] = useState('')
    const [card, setCard] = useState(
        {
        name: "bob",
        age: "25",
        ocupation: "welder",
        married : true
    }
    )
    function changeName(){
        const NewCard = card;
        NewCard.name = data;
        setCard(
            {...NewCard},
        )
        console.log(card.name)
        
    }
    function getNewName(event){
        setData(event.target.value)
    }
    return(
       <div>
       <div style={{textAlign: "center" , border: '1px solid red', margin: "10px" , width: "300px"}}>
        
        <h1 style={{border: '1px solid red'}}>{card.name}</h1>
        <p>{card.age}</p>
        <p>{card.ocupation}</p>
        <p>{card.name} {card.married? "is married" : "is not married"}</p>
        <input type = "text" onChange={getNewName}/>
        <button onClick={changeName}>Change name</button>
       </div>
       </div>
    )
}

