import React, {Component} from "react";
import Header from "./Header";
import Banner from "./Banner";
import Technologies from "./Technologies";
import OurTeam from "./OurTeam";
import Footer from "./Footer";

class Core extends Component {
    state = {
            header: {},
            banner: {},
            technology: {},
            ourTeam: {},
            footer: {}
    };
    render() {
        const { header, banner, technology, ourTeam, footer} = this.state;
        return(
            <div>
                <Header header= {header} />
                <Banner banner= {banner} />
                <Technologies technology= {technology} />
                <OurTeam ourTeam= {ourTeam} />
                <Footer footer= {footer} />
            </div>
        ); 
    }
}

export default Core;