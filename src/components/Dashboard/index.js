import React, {Component} from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import "./index.css";

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Header />
                <div className = "flex-layout">
                    <Menu />
                    <Content />
                </div>
            </div>
        );
    }
}

export default Dashboard;