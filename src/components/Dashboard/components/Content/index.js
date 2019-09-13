import React from "react";
import { Route } from "react-router-dom";
import UserHome from "./components/User-Home";
import Attendance from "./components/Attendance";
import Settings from "./components/Settings";

import "./index.css";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Route exact path="/dashboard" component={UserHome} />
                <Route path="/dashboard/attendance" component={Attendance} />
                <Route path="/dashboard/settings" component={Settings} />
            </div>
        );
    }
}

export default Content;