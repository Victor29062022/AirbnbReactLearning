import React from "react";
import Image from 'next/image'
import Red_Star_Icon from "../../public/img/Red_Star_Icon.png";
import styles from '../../styles/Home.module.css'
type Activity = {
    img: any,
    rating: string,
    descr: string,
    price: string,
    openSpots: number
}

export default function Card(AppProps: Activity) {
    return (
        <div className="card">
            {AppProps.openSpots === 0 && <div className="card_sold_out_badge">SOLD OUT</div>}
            {AppProps.img === undefined || <Image className="card_photo" src={AppProps.img} alt="cardPhoto" />}
            <div className="card_rating">
                {AppProps.rating === undefined || <Image className="red_star_icon" src={Red_Star_Icon} alt="redStarIcon" />}
                <div>{AppProps.rating}</div>
            </div>
            {AppProps.descr === undefined || <div className="card_info_and_price">
                <div>{AppProps.descr}</div>
                <div><span className="bold">From {AppProps.price}</span> / person</div>
            </div>}
        </div>
    )
}
Card.defaultProps ={}