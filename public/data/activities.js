import Biking from "../img/Biking.png"
import Fishing from "../img/Fishing.png"
import Katie_Zaferes from "../img/Katie_Zaferes.png"
import SkyDiving from "../img/SkyDiving.png"

export default [
    {
        id: 0,
        img:{...Katie_Zaferes},
        rating: "5.0",
        descr: "Learn to swim wiht Katie Zaferes",
        price: "$39.99",
        openSpots: 0

    },
    {
        id: 1,
        img: {...Fishing},
        rating: "4.7",
        descr: "Relax on a beatifull pond, or feel the adrenaline of extreme fishing",
        price: "$75",
        openSpots: 3
    },
    {
        id: 2,
        img: {...Biking },
        rating: "3.9",
        descr: "Experience the nature most interesting trails, whyle riding the most recent bikes available",
        price: "$120",
        openSpots: 20
    },
    {
        id: 3,
        img: {...SkyDiving },
        rating: "4.2",
        descr: "Feel alive and train with our best instructors",
        price: "$350",
        openSpots: 10
    },
    
];