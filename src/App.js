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
import appartoo from './images/appartoo.png'
import './App.css';

        // const subtitles = ['Full-stack Web', 'Software'];
class App extends Component {




    constructor(props){
        super(props);
        this.state = {
            email: 'gnaassan@gmail.com',
            // subIndex: 0,
            // fading: false,
            // words : [],
            // wordArray : [],
            // currentWord : 0,
            dl_txt: 'Télécharger CV',
            cv: cv_fr,
            dl_cv: cv_fr_pdf
        };
        // this.initAnimation = this.initAnimation.bind(this);
        // this.changeWord = this.changeWord.bind(this);
        // this.animateLetterIn = this.animateLetterIn.bind(this);
        // this.animateLetterOut = this.animateLetterOut.bind(this);
        // this.splitLetters = this.splitLetters.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        App.scrollDown = App.scrollDown.bind(this);
        App.scrollDowner = App.scrollDowner.bind(this);
        App.scrollDownest = App.scrollDownest.bind(this);
        this.cvEn = this.cvEn.bind(this);
        this.cvFr = this.cvFr.bind(this);

        // this.initAnimation()

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // this.setState({fading: true});
            // let index = this.state.subIndex;
            // this.setState({ subIndex: index + 1 });
            // this.changeWord();
            // this.setState({fading: false})
        }, 4000);

        // setInterval(changeWord, 4000);

        var words = document.getElementsByClassName('word');
        var wordArray = [];
        var currentWord = 0;

        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

            currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
        }

        function animateLetterOut(cw, i) {
            setTimeout(function() {
                cw[i].className = 'letter out';
            }, i*80);
        }

        function animateLetterIn(nw, i) {
            setTimeout(function() {
                nw[i].className = 'letter in';
            }, 340+(i*80));
        }

        function splitLetters(word) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
        }

        changeWord();
        setInterval(changeWord, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    // initAnimation() {
    //     this.setState({words:document.getElementsByClassName('word')});
    //
    //     // this.state.words[this.state.currentWord].style.opacity = 1;
    //     for (let i = 0; i < this.state.words.length; i++) {
    //         this.splitLetters(this.state.words[i]);
    //     }
    // }
    //
    // changeWord() {
    //     var cw = this.state.wordArray[this.state.currentWord];
    //     var nw = this.state.currentWord === this.state.words.length-1 ? this.state.wordArray[0] : this.state.wordArray[this.state.currentWord+1];
    //     for (var i = 0; i < cw.length; i++) {
    //         this.animateLetterOut(cw, i);
    //     }
    //
    //     for (var i = 0; i < nw.length; i++) {
    //         nw[i].className = 'letter behind';
    //         nw[0].parentElement.style.opacity = 1;
    //         this.animateLetterIn(nw, i);
    //     }
    //
    //
    //     this.setState({currentWord: (this.state.currentWord === this.state.wordArray.length-1) ? 0 : this.state.currentWord+1})
    // }
    //
    //
    // animateLetterOut(cw, i) {
    //     setTimeout(function() {
    //         cw[i].className = 'letter out';
    //     }, i*80);
    // }
    //
    // animateLetterIn(nw, i) {
    //     setTimeout(function() {
    //         nw[i].className = 'letter in';
    //     }, 340+(i*80));
    // }
    //
    // splitLetters(word) {
    //     var content = word.innerHTML;
    //     word.innerHTML = '';
    //     var letters = [];
    //     for (var i = 0; i < content.length; i++) {
    //         var letter = document.createElement('span');
    //         letter.className = 'letter';
    //         letter.innerHTML = content.charAt(i);
    //         word.appendChild(letter);
    //         letters.push(letter);
    //     }
    //     this.setState((prevState) => ({
    //         wordArray: [...prevState.wordArray, letters]
    //     }))
    // }

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

    static scrollDown() {
        const height = document.getElementById("header").clientHeight;
        window.scroll({top: height, behavior: "smooth"})
    }

    static scrollDowner() {
        const headerHeight = document.getElementById("header").clientHeight;
        const sectionHeight = document.getElementById("cvSection").clientHeight;
        window.scroll({top: headerHeight + sectionHeight, behavior: "smooth"})
    }

    static scrollDownest() {
        const headerHeight = document.getElementById("header").clientHeight;
        const cvHeight = document.getElementById("cvSection").clientHeight;
        const schoolHeight = document.getElementById("schoolSection").clientHeight;
        window.scroll({top: headerHeight + cvHeight + schoolHeight, behavior: "smooth"})
    }

    cvEn() {
        this.setState({cv: cv_en, dl_txt: 'Download CV', dl_cv: cv_en_pdf})
    }

    cvFr() {
        this.setState({cv: cv_fr, dl_txt: 'Télécharger CV', dl_cv: cv_fr_pdf})
    }

    render() {
        const { email, cv, dl_txt, dl_cv, subIndex, fading } = this.state;
        let ukFlagStyle, frFlagStyle;
        if (dl_txt === 'Download CV') {
            ukFlagStyle = {
                marginRight: '5vmin',
                border: 'solid #6981bd'
            };
            frFlagStyle = {
                border: 'transparent'
            }
        } else {
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
                    <img src={logo} className="main-logo" alt="logo" />
                    <h1 className="title">Guillaume Naassan</h1>
                    <div className="main-text">
                        <div className="subtitle-first">
                            {/*<span className="word wisteria">tasty.</span>*/}
                            {/*<span className="word belize">wonderful.</span>*/}
                            {/*<span className="word pomegranate">fancy.</span>*/}
                            <span className="word green">Web</span>
                            <span className="word wisteria">Software</span>
                        </div>
                        <div className="subtitle-last">
                            <span className="title">Dev</span>
                        </div>
                        {/*<p className="subtitle">Dev.</p>*/}
                    {/*<h3 className='word green'>/!*{subtitles[subIndex % subtitles.length]} *!/Web Dev</h3>*/}
                    {/*<h3 className='word midnight'>/!*{subtitles[subIndex % subtitles.length]} *!/Software Dev</h3>*/}
                    </div>
                    {/*<h3 className="subtitle" id="sub2">Software Dev</h3>*/}
                    <img src={chevron} alt="arrow_down" className="small-logo" onClick={App.scrollDown}/>
                </header>
                <section className="cvSection" id="cvSection">
                    <div className="dlCv">
                        <img src={cv} alt="cv" className="cv"/>
                        <div className="dl">
                            <a href={dl_cv} className="texts">
                                <p className="dl-txt">{dl_txt}</p>
                                <img src={dl} alt="dl" className="dl-icon"/>
                            </a>
                            <div className="flags">
                                <img src={fr} alt="fr_flag" className="flag" onClick={this.cvFr} style={frFlagStyle}/>
                                <img src={uk} alt="uk_flag" className="flag" onClick={this.cvEn} style={ukFlagStyle}/>
                            </div>
                        </div>
                    </div>
                    <img src={chevron1} alt="arrow_down" className="small-logo" onClick={App.scrollDowner}/>
                </section>
                <section className="schoolSection" id="schoolSection">
                    <h2 className="school-title">Formation</h2>
                    <p className="text">
                        2013 - 2016<br/>
                        École d'ingénieurs: Institut Supérieur d'Électronique de Paris
                    </p>
                    <img src={isep} alt="isep_logo" className="isep-logo"/>
                    <p className="text">
                        Cycle préparatoire: Mathématiques, Physique, Sciences de l'Ingénieur<br/>
                        Informatique: Algorithmique, Python
                    </p>
                    <hr className="line"/>
                    <p className="text">
                        2016 - 2017<br/>
                        Crédits à la carte - Conservatoire National des Arts et Métiers
                    </p>
                    <img src={cnam} alt="cnam_logo" className="cnam-logo"/>
                    <p className="text">
                        Informatique: Bases en SQL, HTML, JavaScript, CSS - Java avancé<br/>
                        <hr className="small-line"/>
                        Stage: Cirruseo
                    </p>
                    <div className="internship-container">
                        <img src={cirruseo} alt="cirruseo_logo" className="internship-logo"/>
                        <p className="internship-text">
                            Google Script<br/>
                            Google Cloud Engine<br/>
                            NodeJS
                        </p>
                    </div>
                    <hr className="line"/>
                    <p className="text">
                        2017 - 2019<br/>
                        ISEP: Cycle ingénieur
                    </p>
                    <img src={isep} alt="isep_logo" className="isep-logo"/>
                    <p className="text">
                        Informatique: Java, JavaFX, JavaEE, Spring, SQL, NoSQL<br/>
                        <hr className="small-line"/>
                        Stage: Appartoo
                    </p>
                    <div className="internship-container">
                        <img src={appartoo} alt="appartoo_logo" className="internship-logo"/>
                        <p className="internship-text">
                            Symfony<br/>
                            ExpressJS<br/>
                            AngularJS<br/>
                            Angular7<br/>
                            MongoDB<br/>
                            Intégration continue
                        </p>
                    </div>
                    {/*<img src={chevron2} alt="arrow_down" className="small-logo" onClick={App.scrollDownest}/>*/}
                </section>
            </div>
        );
    }
}

export default App;