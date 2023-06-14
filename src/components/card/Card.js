import React from "react";
import "./card.css"

export default function Card({img, heading}){
    return(
        <div className="mainCardBox">
            <div className="imgContainer">
                <img src={img} />
            </div>
            <div className="detailContainer">
                <h3>{heading}</h3>
                <p>Lorem Ipsum has been the
                    industry's standard dummy text</p>
            </div>
        </div>
    )
}