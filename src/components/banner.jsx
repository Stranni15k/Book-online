import { React, useEffect, useState } from 'react'
import banner1 from "./../Image/Главная/Превью.png";
import banner2 from "./../Image/Главная/Превью.jpg";
import "./../style/style.css";

export default function Banner() {
const length = 2;
var old = length-1;
var current = 0;
const [bannerState, setBannerState] = useState(['show', 'hide']);

useEffect(() => {
const timer = window.setInterval(() => {
    setBannerState([...bannerState, bannerState[current] = 'hide', bannerState[old] = 'show']);

    console.info('Banner changed');

    old = current;
    current++;

    if (current === length) {
            current = 0;
        }
    }, 5000)

    return () => {
    window.clearInterval(timer);
    }
}, [])

return (
    <div className="d-flex align-items-center flex-column" id="banner">
        <img src={banner1} className={bannerState[0]}/>
        <img src={banner2} className={bannerState[1]}/>
    </div>
)
}