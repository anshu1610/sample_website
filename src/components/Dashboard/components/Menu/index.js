import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link> </li>
                    <li><Link to="/dashboard/attendance">Attendance</Link></li>
                    <li><Link to="/dashboard/settings">Settings</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;