import React from "react";
import "./index.css"

class Technology extends React.Component {
    render() {
        const {name} = this.props;
        return <div className="tech-ele">{name}</div>
    }
}

export default Technology;