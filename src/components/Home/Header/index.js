import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="blocks">Intro</div>
                <div className="blocks">Banner</div>
                <div className="blocks">Our Shows</div>
                <div className="blocks">Our Stars</div>
                <div className="blocks">Contact Us</div>
                <div>
                    <Link to = "/" >
                        <button type="button" className="button-login">Login</button>
                    </Link>
                </div>
            </div>);
    }
}

export default Header;