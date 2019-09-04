import React from "react";
import "./index.css"

class Footer extends React.Component {
    render() {
        return ( 
            <div className="footer">
                <div className="foot-item">
                    <strong>Contact Us:- </strong>
                    <p>Email: anshuman@goodworklabs.com<br/>Phone No:##########</p>
                </div>
                <div className="foot-item">
                    <strong>Follow Us on:</strong> <br/>
                    <img className="header-img" src="Assets/Images/FBICON.png" alt="FB.com"/>
                    <img className="header-img" src="Assets/Images/TWITTERICON.png" alt="twitter.com"/>
                    <img className="header-img" src="Assets/Images/INSTAICON.jpg" alt="instagram.com"/>
                </div>
            </div> );
    }
}

export default Footer;