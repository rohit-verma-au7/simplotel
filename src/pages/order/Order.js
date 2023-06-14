import React from "react";
import "./order.css"
import Card from "../../components/card/Card";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

export default function Order(){
    return(
        <div className="orderContainer" id="order">
            <h1>Order Now</h1>

            <div className="cardBox">
                <Card img={img4} heading={"Burger"} />
                <Card img={img2} heading={"Pizza"} />
                <Card img={img3} heading={"Pasta"} />
            </div>
            
            <button>Order</button>
        </div>
    )
}