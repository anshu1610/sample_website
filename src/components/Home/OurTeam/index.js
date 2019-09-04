import React from "react";
import Team from "./components/Team";
import "./index.css";

class OurTeam extends React.Component {
    state = {
        ourteam: [
            { tname: "Led Zeppelin" },
            { tname: "AC/DC" },
            { tname: "Guns N' Roses" },
            { tname: "The Rolling Stones" },
            { tname: "Pink Floyd" }
        ]
    };

    render() {
        const { ourteam } = this.state;
        return (
            <div className="O-team">
                {ourteam.map(team => (
                    <Team tname = {team.tname} /> 
                ))}
            </div>);
    }
}

export default OurTeam;