import logo from "../../images/curved.svg"
import React from "react"
import './nav.css'
import strings_fr from '../../strings/strings_fr.json'
import strings_en from '../../strings/strings_en.json'

const Nav = props => {
    let frNavStyle, enNavStyle

    if (props.strings === strings_en) {
        frNavStyle = {}
        enNavStyle = {
            borderBottom: 'solid',
            transition: '.2s'
        }
    } else if (props.strings === strings_fr) {
        frNavStyle = {
            borderBottom: 'solid',
            transition: '.2s'
        }
        enNavStyle = {}
    }

    const scrollTop = () => {
        window.scroll({top: 0, behavior: "smooth"})
    }

    return (
        <nav className="nav" id="navbar">
            <img src={logo} alt="logo" onClick={scrollTop}/>
            <p id="link1" className="nav-link" onClick={props.scrollDown}>CV</p>
            <p id="link2" className="nav-link" onClick={props.scrollDowner}>Formation</p>
            <p id="link3" className="nav-link" onClick={props.scrollDownest}>Projects</p>
            <p className="nav-link-right" onClick={props.stringsFr} style={frNavStyle}>FR</p>
            <p className="nav-link-right" onClick={props.stringsEn} style={enNavStyle}>EN</p>
        </nav>
    )
}

export default Nav
