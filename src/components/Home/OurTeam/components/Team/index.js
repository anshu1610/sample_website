import React, { Component } from "react";

class Team extends Component {
    render() {
        const { tname } = this.props;
        return <div>{tname}</div>
    }
}

export default Team;