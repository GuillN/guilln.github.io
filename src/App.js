import React, {useState, useEffect} from 'react'
import './App.css'

import logo from './images/curved.svg'
import mailLogo from './images/mail.svg'
import gitLogo from './images/bluegithub.svg'
import chevron from './images/chevron-arrow-down.svg'
import cv_fr from './images/cv_fr.png'
import cv_en from './images/cv_en.png'
import cv_fr_pdf from './images/cv_fr.pdf'
import cv_en_pdf from './images/cv_en.pdf'
import strings_fr from './strings/strings_fr.json'
import strings_en from './strings/strings_en.json'

import Nav from "./components/nav/nav"
import Cv from "./components/cv/cv"
import Schools from "./components/schools/schools"
import Projects from "./components/projects/projects"

const App = () => {

    const [cv, setCv] = useState(cv_fr)
    const [dlCv, setDlCv] = useState(cv_fr_pdf)
    const [strings, setStrings] = useState(strings_fr)
    const [email, setEmail] = useState(strings_fr.email)

    useEffect(() => {
        let words = document.getElementsByClassName('word')
        let letters = []
        let currentWord = 0
        let firstLoop = true

        // console.log('Animation start')
        // console.log('Splitting words into letters ...')
        for (let i = 0; i < words.length; i++) {
            splitLetters(words[i])
        }

        // console.log('Splitting done')

        function changeWord() {
            // console.log('Changing word ...')
            let cw = letters[currentWord]
            if (firstLoop) {
                firstLoop = false
                changeWordNext(cw)
            } else {
                for (let i = 0; i < cw.length; i++) {
                    // Step One : Slide down previous word's letters
                    animateLetterOut(cw, i)
                }
            }
        }

        function animateLetterOut(cw, i) {
            setTimeout(() => {
                if (cw[i].innerHTML === 'k') {
                    cw[i].className = 'letter out space'
                } else {
                    cw[i].className = 'letter out'
                }
                // console.log(`Letter ${cw[i].innerHTML} at index ${i} is out`)
                // console.log(`Length of current word ${cw.length}`)
                if (i === cw.length - 1) {
                    setTimeout(function () {
                        // console.log(`Hiding word: ${words[currentWord].innerHTML}`)
                        for (let j = 0; j < cw.length; j++) {
                            // Step Two : Collapse slided down letters
                            collapseLetter(cw, j)
                        }
                    }, 300)
                }
            }, i * 80)
        }

        function collapseLetter(word, i) {
            setTimeout(function () {
                word[i].classList.toggle('collapsed')
                // console.log(`Letter ${word[i].innerHTML} collapsed`)
                if (i === word.length - 1) {
                    // console.log('All letters collapsed')
                    setTimeout(() => {
                        currentWord = (currentWord === letters.length - 1) ? 0 : currentWord + 1
                        // console.log(`Displaying word: ${words[currentWord].innerHTML}`)
                        // Step Three : Prepare next word
                        changeWordNext(letters[currentWord])
                    }, 300)
                }
            }, i * 80)
        }

        function changeWordNext(nw) {
            for (let i = 0; i < nw.length; i++) {
                // Step Four : Un-collapse next word's letters
                uncollapseLetter(nw, i)
            }
        }

        function uncollapseLetter(word, i) {
            setTimeout(function () {
                if (word[i].innerHTML === 'k') {
                    word[i].className = 'letter behind space'
                } else {
                    word[i].className = 'letter behind'
                }
                word[0].parentElement.style.opacity = 1
                // Step Five : Make un-collapsed letters slide in
                animateLetterIn(word, i)
            }, i * 80)
        }

        function animateLetterIn(nw, i) {
            setTimeout(function () {
                if (nw[i].innerHTML === 'k') {
                    nw[i].className = 'letter in space'
                } else {
                    nw[i].className = 'letter in'
                }
                // console.log(`Letter ${nw[i].innerHTML} is in`)
            }, i * 80)
        }

        function splitLetters(word) {
            // console.log(`Splitting letters of word: ${word.innerHTML}`)
            let content = word.innerHTML
            word.innerHTML = ''
            let lettersArray = []
            for (let i = 0; i < content.length; i++) {
                let letter = document.createElement('span')
                if (content.charAt(i) === 'k') {
                    letter.className = 'letter collapsed space'
                } else {
                    letter.className = 'letter collapsed'
                }
                letter.innerHTML = content.charAt(i)
                word.appendChild(letter)
                lettersArray.push(letter)
            }
            letters.push(lettersArray)
        }

        changeWord()
        setInterval(changeWord, 8000)
        window.addEventListener('scroll', handleScroll)
    }, [])

    const copyToClipboard = e => {
        // Copy text
        setEmail('Copied !')
        const textField = document.createElement('textarea')
        textField.innerText = 'gnaassan@gmail.com'
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        e.target.focus()
    }

    const scrollDown = () => {
        const height = document.getElementById("header").clientHeight
        window.scroll({top: height, behavior: "smooth"})
    }

    const scrollDowner = () => {
        const headerHeight = document.getElementById("header").clientHeight
        const sectionHeight = document.getElementById("cvSection").clientHeight
        const navbar = document.getElementById('navbar')
        const navHeight = navbar.clientHeight
        if (navbar.classList.contains('sticky')) {
            window.scroll({top: headerHeight + sectionHeight - navHeight, behavior: "smooth"})
        } else {
            window.scroll({top: headerHeight + sectionHeight, behavior: "smooth"})
        }
    }

    const scrollDownest = () => {
        const headerHeight = document.getElementById("header").clientHeight
        const cvHeight = document.getElementById("cvSection").clientHeight
        const schoolHeight = document.getElementById("schoolSection").clientHeight
        const navbar = document.getElementById('navbar')
        const navHeight = navbar.clientHeight
        if (navbar.classList.contains('sticky')) {
            window.scroll({top: headerHeight + cvHeight + schoolHeight - navHeight, behavior: "smooth"})
        } else {
            window.scroll({top: headerHeight + cvHeight + schoolHeight, behavior: "smooth"})
        }
    }

    const handleScroll = () => {
        const scrollPositionY = +window.scrollY
        const height1 = document.getElementById('header').clientHeight
        const scroll1 = scrollPositionY >= height1
        const navbar = document.getElementById('navbar')
        const link1 = document.getElementById('link1')
        if (scroll1) {
            navbar.classList.add('sticky')
            link1.classList.add('underline')
        } else {
            navbar.classList.remove('sticky')
            link1.classList.remove('underline')
        }

        const height2 = height1 + document.getElementById('cvSection').clientHeight - navbar.clientHeight
        const scroll2 = scrollPositionY >= height2
        const link2 = document.getElementById('link2')
        if (scroll2) {
            link1.classList.remove('underline')
            link2.classList.add('underline')
        } else {
            link2.classList.remove('underline')
        }

        const height3 = height2 + document.getElementById('schoolSection').clientHeight - navbar.clientHeight
        const scroll3 = scrollPositionY >= height3
        const link3 = document.getElementById('link3')
        if (scroll3) {
            link2.classList.remove('underline')
            link3.classList.add('underline')
        } else {
            link3.classList.remove('underline')
        }
    }

    const stringsEn = () => {
        setStrings(strings_en)
        setCv(cv_en)
        setDlCv(cv_en_pdf)
    }

    const stringsFr = () => {
        setStrings(strings_fr)
        setCv(cv_fr)
        setDlCv(cv_fr_pdf)
    }

    return (
        <div className="main">
            <header className="header" id="header">
                <div className="top-logos">
                    <div id="email-logo" onClick={copyToClipboard}>
                        <p id="email-txt">{email}</p>
                        <img src={mailLogo} className="small-logo" alt="mail_logo"/>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/guilln">
                        <div id="git-logo">
                            <p id="git-txt">github.com/GuillN</p>
                            <img src={gitLogo} className="small-logo" alt="git_logo"/>
                        </div>
                    </a>
                </div>
                <div className="bot-logos">
                    <img src={logo} className="main-logo" alt="logo"/>
                    <h1 className="title">Guillaume Naassan</h1>
                    <div className="subtitle-first">
                        <span className="word green">Full-Stack Web</span>
                        <span className="word wisteria">Software</span>
                        <span className="word pomegranate">Video Game</span>
                        <span className="subtitle">Developer</span>
                    </div>
                    <img src={chevron} alt="arrow_down" className="small-logo" onClick={scrollDown}/>
                </div>
            </header>

            <Nav strings={strings} stringsFr={stringsFr} stringsEn={stringsEn} scrollDown={scrollDown}
                 scrollDowner={scrollDowner} scrollDownest={scrollDownest}/>

            <Cv strings={strings} cv={cv} dlCv={dlCv} stringsEn={stringsEn} stringsFr={stringsFr}
                scrollDowner={scrollDowner}/>

            <Schools strings={strings} scrollDownest={scrollDownest}/>

            <Projects strings={strings}/>

        </div>
    )
}

export default App
