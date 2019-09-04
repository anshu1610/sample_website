import React, { Component } from "react";
import "./index.css";

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img className="img-tag" src="Assets/Images/LEDZEPPELIN.jpg" alt="Led Zeppelin" />
                <img className="img-tag" src="Assets/Images/ACDC.jpg" alt="AD/DC" />
                <img className="img-tag" src="Assets/Images/GUNSNROSES.jpeg" alt="Guns N' Roses" />
                <img className="img-tag" src="Assets/Images/ROLLINGSTONES.jpg" alt="The Rolling Stones" />
                <img className="img-tag" src="Assets/Images/PINKFLOYD.jpg" alt="Pink Floyd" />
            </div>);
    }
}

export default Banner;