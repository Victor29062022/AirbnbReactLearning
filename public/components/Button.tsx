import React from "react";
import { useState } from "react";

export default function Button(props){
    const [isActive, setIsActive] = useState(false)
    
    function handleClickButton(){
        setIsActive(!isActive);
    }

    return(
        <button className ="search-button" 
            style ={{
                backgroundColor: isActive? 'pink' : ''
            }}
            onMouseDown={handleClickButton}
            onMouseUp={handleClickButton}
            onClick={props.handleClick}
            >{props.name}</button>
    )
}