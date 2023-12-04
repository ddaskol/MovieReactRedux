import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import logo from "./logoFooter.png"
// import { scrollToTop } from "../../helpers";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="uppercase footer_startTextLine">
                <span className="bold">Digitalproductdesign</span>
                <span className="light">Remotework</span>
                <span className="bold">UXdesign</span>
                <span className="light">Distributedteams</span>
                <span className="bold">Creativity</span>
                <span className="light">Strategy</span>
                <span className="bold">Suspense</span>
                <span className="light">Growth</span>
                <span className="bold">Digitalproductdesign</span>
                <span className="light">Remotework</span>
                <span className="bold">UXdesign</span>
                <span className="light">Distributedteams</span>
                <span className="bold">Creativity</span>
                <span className="light">Strategy</span>
                <span className="bold">Suspense</span>
                <span className="light">Growth</span>
            </div>
            <div className="centerItem">
                <div className="centerItem_row">
                    <div className="footer_logo">
                        <div className="footer_logo_box">
                            {/* <Link to='/' onClick={scrollToTop}><img src={logo} alt="//" /></Link> */}
                        </div>
                    </div>
                    <div className="footer_text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst.<br /> Fusce a nunc eget ligula suscipit finibus.
                        </p>
                    </div>
                    <div className="footer_contacts">
                        <a href="https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link" rel="noreferrer"> Twitter</a>
                        <a href="https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link" rel="noreferrer"> Linkedin</a>
                        <a href="/https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link"> RSS</a>
                    </div>
                </div>
            </div>
            <div className="footer_aboutInfo_EndItem">
                © 2012–2020 Nordic Rose Co. <br />
                All rights reserved.
            </div>
        </footer>
    )
}

export default Footer