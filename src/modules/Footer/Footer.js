import React from "react";
import Logo from "../Header/Logo/Logo";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="uppercase footer_startTextLine">
                <span className="bold">Screenplay</span>
                <span className="light">Cinematography</span>
                <span className="bold">Actor</span>
                <span className="light">Poster</span>
                <span className="bold">Premiere</span>
                <span className="light">Hollywood</span>
                <span className="bold">Festival</span>
                <span className="light">Character</span>
                <span className="bold">Comedy</span>
                <span className="light">Oscar</span>
                <span className="bold">Drama</span>
                <span className="light">Genre</span>
                <span className="bold">Soundtrack</span>
                <span className="light"> Effects</span>
                <span className="bold">Role</span>
                <span className="light">Growth</span>
            </div>
            <div className="centerItem">
                <div className="centerItem_row">
                    <div className="footer_logo">
                        <Logo />
                    </div>
                    <div className="footer_text">
                        <p>
                            Discover the magic of cinema on our premier film hub! <br />From timeless classics to the latest releases, explore a curated collection and stay updated on industry trends. Whether you're a casual viewer or a dedicated cinephile, our site is your go-to for a cinematic journey.                        </p>
                    </div>
                    <div className="footer_contacts">
                        <a href="https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link" rel="noreferrer"> Twitter</a>
                        <a href="https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link" rel="noreferrer"> Linkedin</a>
                        <a href="/https://t.me/elitnaneruhomist" target="_blank" className="footer_contacts_link"> RSS</a>
                    </div>
                </div>
            </div>
            <div className="footer_aboutInfo_EndItem">
                © 2022–2023 Movie.dk<br />
                All rights reserved.
            </div>
        </footer>
    )
}

export default Footer