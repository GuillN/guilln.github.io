import logo from "../../images/curved.svg";
import React from "react";
import App from "../../App";
import './nav.css'
import strings_fr from '../../strings/strings_fr.json'
import strings_en from '../../strings/strings_en.json'

const Nav = () => {
    let frNavStyle, enNavStyle;

    if (this.props.lang === strings_en) {
        frNavStyle = {
        };
        enNavStyle = {
            borderBottom: 'solid',
            transition: '.2s'
        }
    } else if (this.props.lang === strings_fr) {
        frNavStyle = {
            borderBottom: 'solid',
            transition: '.2s'
        };
        enNavStyle = {
        }
    }

    return(
        <nav className="nav" id="navbar">
            <img src={logo} alt="logo" onClick={App.scrollTop}/>
            <p id="link1" className="nav-link" onClick={App.scrollDown}>CV</p>
            <p id="link2" className="nav-link" onClick={App.scrollDowner}>Formation</p>
            <p id="link3" className="nav-link" onClick={App.scrollDownest}>Projects</p>
            <p className="nav-link-right" onClick={App.stringsFr} style={frNavStyle}>FR</p>
            <p className="nav-link-right" onClick={App.stringsEn} style={enNavStyle}>EN</p>
        </nav>
    )

};

export default Nav;