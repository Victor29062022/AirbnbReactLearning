import React from "react";
import Image from 'next/image'
import Airbnb_Logo_Belo from "../../public/img/Airbnb_Logo_Belo.png";
import styles from '../../styles/Home.module.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Image className="logo" src = {Airbnb_Logo_Belo} alt="logo"/>
        </div>
    )
}