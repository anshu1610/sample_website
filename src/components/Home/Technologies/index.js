import React, { Component } from "react";
import Technology from "./components/Technology";
import "./index.css"

class Technologies extends Component {

    state = {
        technologies: [
            { name: "R&B" },
            { name: "Blues Rock" },
            { name: "Psychedelic" },
            { name: "Alternate Metal" },
            { name: "Soft Rock" }
        ]
    };

    render() {
        const { technologies } = this.state;
        return (
            <div className="tech">
                {technologies.map(technology => (
                    <Technology name = {technology.name} />
                ))}
            </div>);
    }
}

export default Technologies;