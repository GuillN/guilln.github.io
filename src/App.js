import React, { Component } from 'react';
import logo from './images/curved.svg';
import mailLogo from './images/mail.svg';
import gitLogo from './images/bluegithub.svg';
import chevron from './images/chevron-arrow-down.svg';
import chevron1 from './images/darker-chevron-arrow-down.svg';
import chevron2 from './images/darkest-chevron-arrow-down.svg';
import dl from './images/download.svg'
import fr from './images/france.svg';
import uk from './images/united-kingdom.svg';
import cv_fr from './images/cv_fr.png';
import cv_en from './images/cv_en.png';
import cv_fr_pdf from './images/cv_fr.pdf';
import cv_en_pdf from './images/cv_en.pdf';
import isep from './images/iseplogo.png'
import cnam from './images/cnamlogo.png'
import cirruseo from './images/cirruseo.png'
import appartoo_logo from './images/appartoo_logo.png'
import luxo from './images/luxo.png'
// import snork1 from './images/snorkunking_menu.PNG'
import snork2 from './images/snorkunking_ig.PNG'
import appartoo from'./images/appartoo.png'
import monita from './images/monita.png'
import website from './images/website.png'
import classrooms from './images/classrooms.png'

import strings_fr from './strings/strings_fr.json'
import strings_en from './strings/strings_en.json'
import './App.css';
import Nav from "./components/nav";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            cv: cv_fr,
            dl_cv: cv_fr_pdf,
            strings: strings_fr,
            email: strings_fr.email
        };
        this.copyToClipboard = this.copyToClipboard.bind(this);
        App.scrollTop = App.scrollTop.bind(this);
        App.scrollDown = App.scrollDown.bind(this);
        App.scrollDowner = App.scrollDowner.bind(this);
        App.scrollDownest = App.scrollDownest.bind(this);
        App.handleScroll = App.handleScroll.bind(this);
        App.stringsEn = App.stringsEn.bind(this);
        App.stringsFr = App.stringsFr.bind(this);
    }

    componentDidMount() {
        var words = document.getElementsByClassName('word');
        var letters = [];
        var currentWord = 0;

        console.log('Animation start');
        // hideWords();
        // words[currentWord].style.opacity = 1;
        // words[currentWord].style.display = 'inline';
        // words[currentWord].style.maxWidth = '1000px';
        // words[currentWord].style.visibility = 'visible';

        console.log(`Splitting words into letters ...`);
        for (var i = 0; i < words.length; i++) {

            splitLetters(words[i]);
        }
        console.log(`Splitting done`);


        function changeWord() {
            console.log(`Changing word ...`);
            var cw = letters[currentWord];
            var nextWord = currentWord === words.length-1 ? 0 : currentWord+1;
            var nw = letters[nextWord];

            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i, nw);
            }

        }

        function changeWordNext(nw) {
            for (var i = 0; i < nw.length; i++) {
                if (nw[i].innerHTML === 'k') {
                    nw[i].className = 'letter behind space';
                } else {
                    nw[i].className = 'letter behind';
                }
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

        }

        function animateLetterOut(cw, i, nw) {
            setTimeout(() => {
                if (cw[i].innerHTML === 'k') {
                    cw[i].className = 'letter out space';
                } else {
                    cw[i].className = 'letter out';
                }
                console.log(`Letter ${cw[i].innerHTML} at index ${i} is out`);
                console.log(`Length of current word ${cw.length}`);
                if (i === cw.length-1) {
                    setTimeout(function () {
                        console.log(`Hiding word: ${words[currentWord].innerHTML}`);
                        for (let j = 0; j < cw.length; j++) {
                            // cw[i].classList.toggle('collapsed');
                            collapseLetter(cw, j);

                        }
                        // words[currentWord].style.display = 'none';
                        //words[currentWord].classList.toggle('collapsed');
                        // words[currentWord].style.maxWidth = '0px';
                        // words[currentWord].style.visibility = 'hidden';
                        // setTimeout(function () {
                        // for (let i = 0; i < nw.length; i++) {
                        // nw[i].classList.toggle('collapsed');
                        // collapseLetter(nw, i)
                        // }

                        // words[currentWord].style.display = 'inline';
                        // words[currentWord].classList.toggle('collapsed');
                        // words[currentWord].style.maxWidth = '1000px';
                        // words[currentWord].style.visibility = 'visible';
                        // setTimeout(changeWordNext(nw), 300)
                        // }, 5000)
                    }, 1000)
                }
            }, i*80)
        }

        function animateLetterIn(nw, i) {
            setTimeout(function() {
                if (nw[i].innerHTML === 'k') {
                    nw[i].className = 'letter in space'
                } else {
                    nw[i].className = 'letter in'
                }
                console.log(`Letter ${nw[i].innerHTML} is in`)
            }, i*80)
        }

        function collapseLetter(word, i) {
            setTimeout(function () {
                word[i].classList.toggle('collapsed');
                if (i === word.length-1) {
                    setTimeout(() => {
                        currentWord = (currentWord === letters.length - 1) ? 0 : currentWord + 1;
                        console.log(`Displaying word: ${words[currentWord].innerHTML}`);
                        changeWordNext(words[currentWord])
                    }, 1000)
                }
            }, i*80)
        }

        function splitLetters(word) {
            console.log(`Splitting letters of word: ${word.innerHTML}`);
            var content = word.innerHTML;
            word.innerHTML = '';
            var lettersArray = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                if (content.charAt(i) === 'k') {
                    letter.className = 'letter collapsed space';
                } else {
                    letter.className = 'letter collapsed';
                }
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                lettersArray.push(letter);
            }
            letters.push(lettersArray);
        }

        function hideWords() {
            console.log('Hiding words...');
            for (let i = 1; i < words.length; i++) {
                // words[i].style.display = 'none';
                words[i].classList.toggle('collapsed');
                // words[i].style.maxWidth = '0px';
                // words[i].style.visibility = 'hidden';
                console.log(`Word: ${words[i].innerHTML} hidden`);
            }
        }

        changeWord();
        setInterval(changeWord, 8000);

        return window.addEventListener('scroll', App.handleScroll)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        return window.removeEventListener('scroll', App.handleScroll)
    }

    copyToClipboard(e) {
        // Copy text
        this.setState({email: 'Copied !'});
        const textField = document.createElement('textarea');
        textField.innerText = 'gnaassan@gmail.com';
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        e.target.focus()
    };

    static scrollTop () {
        window.scroll({top: 0, behavior: "smooth"})
    }

    static scrollDown() {
        const height = document.getElementById("header").clientHeight;
        window.scroll({top: height, behavior: "smooth"})
    }

    static scrollDowner() {
        const headerHeight = document.getElementById("header").clientHeight;
        const sectionHeight = document.getElementById("cvSection").clientHeight;
        const navbar = document.getElementById('navbar');
        const navHeight = navbar.clientHeight;
        if (navbar.classList.contains('sticky')) {
            window.scroll({top: headerHeight + sectionHeight - navHeight, behavior: "smooth"})
        } else {
            window.scroll({top: headerHeight + sectionHeight, behavior: "smooth"})
        }
    }

    static scrollDownest() {
        const headerHeight = document.getElementById("header").clientHeight;
        const cvHeight = document.getElementById("cvSection").clientHeight;
        const schoolHeight = document.getElementById("schoolSection").clientHeight;
        const navbar = document.getElementById('navbar');
        const navHeight = navbar.clientHeight;
        if (navbar.classList.contains('sticky')) {
            window.scroll({top: headerHeight + cvHeight + schoolHeight - navHeight, behavior: "smooth"})
        } else {
            window.scroll({top: headerHeight + cvHeight + schoolHeight, behavior: "smooth"})
        }
    }

    static handleScroll() {
        const scrollPositionY = +window.scrollY;
        const height1 = document.getElementById('header').clientHeight;
        const scroll1 = scrollPositionY >= height1;
        const navbar = document.getElementById('navbar');
        const link1 = document.getElementById('link1');
        if (scroll1) {
            navbar.classList.add('sticky');
            link1.classList.add('underline')
        } else {
            navbar.classList.remove('sticky');
            link1.classList.remove('underline')
        }

        const height2 = height1 + document.getElementById('cvSection').clientHeight - navbar.clientHeight;
        const scroll2 = scrollPositionY >= height2;
        const link2 = document.getElementById('link2');
        if (scroll2) {
            link1.classList.remove('underline');
            link2.classList.add('underline')
        } else {
            link2.classList.remove('underline')
        }

        const height3 = height2 + document.getElementById('schoolSection').clientHeight - navbar.clientHeight;
        const scroll3 = scrollPositionY >= height3;
        const link3 = document.getElementById('link3');
        if (scroll3) {
            link2.classList.remove('underline');
            link3.classList.add('underline')
        } else {
            link3.classList.remove('underline')
        }
    }

    static stringsEn() {
        this.setState({strings: strings_en, dl_cv: cv_en_pdf, cv: cv_en})
    }

    static stringsFr() {
        this.setState({strings: strings_fr, dl_cv: cv_fr_pdf, cv: cv_fr})
    }

    render() {
        const { cv, dl_cv, strings, email } = this.state;
        let ukFlagStyle, frFlagStyle;
        if (strings === strings_en) {
            ukFlagStyle = {
                marginRight: '5vmin',
                border: 'solid #6981bd'
            };
            frFlagStyle = {
                border: 'transparent'
            }
        } else if (strings === strings_fr) {
            ukFlagStyle = {
                marginRight: '5vmin',
                border: 'transparent'
            };
            frFlagStyle = {
                border: 'solid #6981bd'
            }
        }
        return (
            <div className="main">
                <header className="header" id="header">
                    <div className="top-logos">
                        <div id="email-logo" onClick={this.copyToClipboard}>
                            <p id="email-txt">{email}</p>
                            <img src={mailLogo} className="small-logo" alt="mail_logo"/>
                        </div>
                        <a href="https://github.com/guilln">
                            <div id="git-logo">
                                <p id="git-txt">github.com/GuillN</p>
                                <img src={gitLogo} className="small-logo" alt="git_logo"/>
                            </div>
                        </a>
                    </div>
                    <div className="bot-logos">
                        <img src={logo} className="main-logo" alt="logo" />
                        <h1 className="title">Guillaume Naassan</h1>
                        <div className="subtitle-first">
                            <span className="word pomegranate">Video Game</span>
                            <span className="word green">Full-Stack Web</span>
                            <span className="word wisteria">Software</span>
                            <span className="subtitle">Developer</span>
                        </div>
                        <img src={chevron} alt="arrow_down" className="small-logo" onClick={App.scrollDown}/>
                    </div>
                </header>

                <Nav lang={strings}/>

                <section className="cvSection" id="cvSection">
                    <div className="dlCv">
                        <img src={cv} alt="cv" className="cv"/>
                        <div className="dl">
                            <a href={dl_cv} className="texts">
                                <p className="dl-txt">{strings.download}</p>
                                <img src={dl} alt="dl" className="dl-icon"/>
                            </a>
                            <div className="flags">
                                <img src={uk} alt="uk_flag" className="flag" onClick={App.stringsEn} style={ukFlagStyle}/>
                                <img src={fr} alt="fr_flag" className="flag" onClick={App.stringsFr} style={frFlagStyle}/>
                            </div>
                        </div>
                    </div>
                    <img src={chevron1} alt="arrow_down" className="small-logo" onClick={App.scrollDowner}/>
                </section>
                <section className="schoolSection" id="schoolSection">
                    <h2 className="school-title">Formation</h2>
                    <p className="text">
                        2013 - 2016<br/>
                        {strings.school_isep}: Institut Supérieur d'Électronique de Paris<br/>
                        {strings.cycle}
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">
                        <img src={isep} alt="isep_logo" className="isep-logo"/>
                    </a>
                    <p className="text small">{strings.subjects}</p>
                    <p className="text-green">{strings.subjects2}</p>
                    <hr className="line"/>
                    <p className="text">
                        2016 - 2017<br/>
                        Conservatoire National des Arts et Métiers
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.cnam.fr/">
                        <img src={cnam} alt="cnam_logo" className="cnam-logo"/>
                    </a>
                    <p className="text-green">
                        {strings.subjects3}<br/>
                        <hr className="small-line"/>
                        {strings.internship}: Cirruseo
                    </p>
                    <div className="internship-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.cirruseo.com/">
                            <img src={cirruseo} alt="cirruseo_logo" className="internship-logo"/>
                        </a>
                        <p className="internship-text">
                            Google Script<br/>
                            Google Cloud Engine<br/>
                            NodeJS
                        </p>
                    </div>
                    <hr className="line"/>
                    <p className="text">
                        2017 - 2019<br/>
                        {strings.school_isep}: Institut Supérieur d'Électronique de Paris<br/>
                        {strings.cycle2}
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">
                        <img src={isep} alt="isep_logo" className="isep-logo"/>
                    </a>
                    <p className="text-green">
                        {strings.subjects4}<br/>
                        <hr className="small-line"/>
                        {strings.internship}: Appartoo
                    </p>
                    <div className="internship-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.appartoo.com/">
                            <img src={appartoo_logo} alt="appartoo_logo" className="internship-logo"/>
                        </a>
                        <p className="internship-text">
                            Symfony<br/>
                            ExpressJS<br/>
                            AngularJS<br/>
                            Angular7<br/>
                            MongoDB<br/>
                            {strings.integration}
                        </p>
                    </div>
                    <img src={chevron2} alt="arrow_down" className="small-logo" onClick={App.scrollDownest}/>
                </section>
                <section className="projects-section">
                    <h2 className="projects-title">{strings.projects_title}</h2>
                    <div id="project1" className="project-container">
                        <h3 className="project-title">Luxo</h3>
                        <img id="img1" className="project-image" src={luxo} alt="luxo-img"/>
                        <div id="txt1">
                            <p className="project-text">{strings.project.luxo.description}</p>
                            <p className="project-text">{strings.project.luxo.tech}</p>
                        </div>
                    </div>
                    <div id="project2" className="project-container">
                        <h3 className="project-title">Snorkunking</h3>
                        <img id="img2" className="project-image" src={snork2} alt="snork-img-2"/>
                        <div id="txt2">
                            <p className="project-text">{strings.project.snorkunking.description}</p>
                            <p className="project-text">{strings.project.snorkunking.tech}</p>
                        </div>
                    </div>
                    <div id="project3" className="project-container">
                        <h3 className="project-title">Appartoo</h3>
                        <img id="img3" className="project-image" src={appartoo} alt="appartoo-img"/>
                        <div id="txt3">
                            <p className="project-text">{strings.project.appartoo.description}</p>
                            <p className="project-text">{strings.project.appartoo.tech}</p>
                            <p className="project-text">{strings.project.appartoo.description2}</p>
                            <p className="project-text">{strings.project.appartoo.tech2}</p>
                        </div>
                    </div>
                    <div id="project4" className="project-container">
                        <h3 className="project-title">Monita</h3>
                        <img id="img4" className="project-image" src={monita} alt="monita-img"/>
                        <div id="txt4">
                            <p className="project-text">{strings.project.monita.description}</p>
                            <p className="project-text">{strings.project.monita.tech}</p>
                        </div>
                    </div>
                    <div id="project5" className="project-container">
                        <h3 className="project-title">Portfolio</h3>
                        <img id="img5" className="project-image" src={website} alt="website-img"/>
                        <div id="txt5">
                            <p className="project-text">{strings.project.website.description}</p>
                            <p className="project-text">{strings.project.website.tech}</p>
                        </div>
                    </div>
                    <div id="project6" className="project-container">
                        <h3 className="project-title">Classrooms</h3>
                        <img id="img6" className="project-image" src={classrooms} alt="classrooms-img"/>
                        <div id="txt6">
                            <p className="project-text">{strings.project.classrooms.description}</p>
                            <p className="project-text">{strings.project.classrooms.tech}</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;