(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/cv_fr.29d4766f.png"},function(e,t,a){e.exports=a.p+"static/media/cv_fr.50dfc0d7.pdf"},function(e,t,a){e.exports=a.p+"static/media/iseplogo.aee15beb.png"},,,,,,function(e,t,a){e.exports=a.p+"static/media/curved.54e3b0e8.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.46d1dddd.svg"},function(e,t,a){e.exports=a.p+"static/media/bluegithub.ec4ada87.svg"},function(e,t,a){e.exports=a.p+"static/media/chevron-arrow-down.53a1301e.svg"},function(e,t,a){e.exports=a.p+"static/media/darker-chevron-arrow-down.8e455b86.svg"},function(e,t,a){e.exports=a.p+"static/media/download.dd46779f.svg"},function(e,t,a){e.exports=a.p+"static/media/france.968aaa24.svg"},function(e,t,a){e.exports=a.p+"static/media/united-kingdom.e5564902.svg"},function(e,t,a){e.exports=a.p+"static/media/cv_en.51924b0e.png"},function(e,t,a){e.exports=a.p+"static/media/cv_en.53edafbd.pdf"},function(e,t,a){e.exports=a.p+"static/media/cnamlogo.fa0c5684.png"},function(e,t,a){e.exports=a.p+"static/media/cirruseo.ec98e66d.png"},function(e,t,a){e.exports=a.p+"static/media/appartoo.cc897495.png"},,,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/darkest-chevron-arrow-down.2bdab533.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),o=a.n(c),r=(a(31),a(7)),s=a(8),i=a(23),m=a(9),d=a(24),u=a(1),p=a(10),g=a.n(p),v=a(11),h=a.n(v),E=a(12),b=a.n(E),f=a(13),N=a.n(f),w=a(14),x=a.n(w),y=(a(33),a(15)),S=a.n(y),k=a(16),C=a.n(k),_=a(17),j=a.n(_),I=a(2),O=a.n(I),D=a(18),T=a.n(D),H=a(3),B=a.n(H),J=a(19),M=a.n(J),L=a(4),A=a.n(L),q=a(20),F=a.n(q),G=a(21),P=a.n(G),V=a(22),W=a.n(V),Q=(a(34),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"gnaassan@gmail.com",dl_txt:"T\xe9l\xe9charger CV",cv:O.a,dl_cv:B.a},a.copyToClipboard=a.copyToClipboard.bind(Object(u.a)(Object(u.a)(a))),t.scrollDown=t.scrollDown.bind(Object(u.a)(Object(u.a)(a))),t.scrollDowner=t.scrollDowner.bind(Object(u.a)(Object(u.a)(a))),t.scrollDownest=t.scrollDownest.bind(Object(u.a)(Object(u.a)(a))),a.cvEn=a.cvEn.bind(Object(u.a)(Object(u.a)(a))),a.cvFr=a.cvFr.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("word"),t=[],a=0;e[a].style.opacity=1;for(var n=0;n<e.length;n++)r(e[n]);function l(){for(var n=t[a],l=a===e.length-1?t[0]:t[a+1],r=0;r<n.length;r++)c(n,r);for(r=0;r<l.length;r++)"k"===l[r]?l[r].className="letter behind space":l[r].className="letter behind",l[0].parentElement.style.opacity=1,o(l,r);a=a===t.length-1?0:a+1}function c(e,t){setTimeout(function(){"k"===e[t]?e[t].className="letter out space":e[t].className="letter out"},80*t)}function o(e,t){setTimeout(function(){console.log("Animate letter in: ".concat(e[t].innerHTML)),"k"===e[t]?e[t].className="letter in space":e[t].className="letter in"},740+80*t)}function r(e){var a=e.innerHTML;console.log("Splitting word: ".concat(a)),e.innerHTML="";for(var n=[],l=0;l<a.length;l++){var c=document.createElement("span");"k"===a.charAt(l)?c.className="letter space":c.className="letter",c.innerHTML=a.charAt(l),console.log("New letter: ".concat(c.innerHTML)),e.appendChild(c),n.push(c)}t.push(n)}l(),setInterval(l,4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"copyToClipboard",value:function(e){this.setState({email:"Copied !"});var t=document.createElement("textarea");t.innerText="gnaassan@gmail.com",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),e.target.focus()}},{key:"cvEn",value:function(){this.setState({cv:T.a,dl_txt:"Download CV",dl_cv:M.a})}},{key:"cvFr",value:function(){this.setState({cv:O.a,dl_txt:"T\xe9l\xe9charger CV",dl_cv:B.a})}},{key:"render",value:function(){var e,a,n=this.state,c=n.email,o=n.cv,r=n.dl_txt,s=n.dl_cv;n.subIndex,n.fading;return"Download CV"===r?(e={marginRight:"5vmin",border:"solid #6981bd"},a={border:"transparent"}):(e={marginRight:"5vmin",border:"transparent"},a={border:"solid #6981bd"}),l.a.createElement("div",{className:"main"},l.a.createElement("header",{className:"header",id:"header"},l.a.createElement("div",{className:"top-logos"},l.a.createElement("div",{id:"email-logo",onClick:this.copyToClipboard},l.a.createElement("p",{id:"email-txt"},c),l.a.createElement("img",{src:h.a,className:"small-logo",alt:"mail_logo"})),l.a.createElement("a",{href:"https://github.com/guilln"},l.a.createElement("div",{id:"git-logo"},l.a.createElement("p",{id:"git-txt"},"github.com/GuillN"),l.a.createElement("img",{src:b.a,className:"small-logo",alt:"git_logo"})))),l.a.createElement("img",{src:g.a,className:"main-logo",alt:"logo"}),l.a.createElement("h1",{className:"title"},"Guillaume Naassan"),l.a.createElement("div",{className:"subtitle-first"},l.a.createElement("span",{className:"word green"},"Full-Stack Web"),l.a.createElement("span",{className:"word wisteria"},"Software"),l.a.createElement("span",{className:"subtitle"},"Dev")),l.a.createElement("img",{src:N.a,alt:"arrow_down",className:"small-logo",onClick:t.scrollDown})),l.a.createElement("section",{className:"cvSection",id:"cvSection"},l.a.createElement("div",{className:"dlCv"},l.a.createElement("img",{src:o,alt:"cv",className:"cv"}),l.a.createElement("div",{className:"dl"},l.a.createElement("a",{href:s,className:"texts"},l.a.createElement("p",{className:"dl-txt"},r),l.a.createElement("img",{src:S.a,alt:"dl",className:"dl-icon"})),l.a.createElement("div",{className:"flags"},l.a.createElement("img",{src:C.a,alt:"fr_flag",className:"flag",onClick:this.cvFr,style:a}),l.a.createElement("img",{src:j.a,alt:"uk_flag",className:"flag",onClick:this.cvEn,style:e})))),l.a.createElement("img",{src:x.a,alt:"arrow_down",className:"small-logo",onClick:t.scrollDowner})),l.a.createElement("section",{className:"schoolSection",id:"schoolSection"},l.a.createElement("h2",{className:"school-title"},"Formation"),l.a.createElement("p",{className:"text"},"2013 - 2016",l.a.createElement("br",null),"\xc9cole d'ing\xe9nieurs: Institut Sup\xe9rieur d'\xc9lectronique de Paris"),l.a.createElement("img",{src:A.a,alt:"isep_logo",className:"isep-logo"}),l.a.createElement("p",{className:"text"},"Cycle pr\xe9paratoire: Math\xe9matiques, Physique, Sciences de l'Ing\xe9nieur",l.a.createElement("br",null),"Informatique: Algorithmique, Python"),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",{className:"text"},"2016 - 2017",l.a.createElement("br",null),"Cr\xe9dits \xe0 la carte - Conservatoire National des Arts et M\xe9tiers"),l.a.createElement("img",{src:F.a,alt:"cnam_logo",className:"cnam-logo"}),l.a.createElement("p",{className:"text"},"Informatique: Bases en SQL, HTML, JavaScript, CSS - Java avanc\xe9",l.a.createElement("br",null),l.a.createElement("hr",{className:"small-line"}),"Stage: Cirruseo"),l.a.createElement("div",{className:"internship-container"},l.a.createElement("img",{src:P.a,alt:"cirruseo_logo",className:"internship-logo"}),l.a.createElement("p",{className:"internship-text"},"Google Script",l.a.createElement("br",null),"Google Cloud Engine",l.a.createElement("br",null),"NodeJS")),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",{className:"text"},"2017 - 2019",l.a.createElement("br",null),"ISEP: Cycle ing\xe9nieur"),l.a.createElement("img",{src:A.a,alt:"isep_logo",className:"isep-logo"}),l.a.createElement("p",{className:"text"},"Informatique: Java, JavaFX, JavaEE, Spring, SQL, NoSQL",l.a.createElement("br",null),l.a.createElement("hr",{className:"small-line"}),"Stage: Appartoo"),l.a.createElement("div",{className:"internship-container"},l.a.createElement("img",{src:W.a,alt:"appartoo_logo",className:"internship-logo"}),l.a.createElement("p",{className:"internship-text"},"Symfony",l.a.createElement("br",null),"ExpressJS",l.a.createElement("br",null),"AngularJS",l.a.createElement("br",null),"Angular7",l.a.createElement("br",null),"MongoDB",l.a.createElement("br",null),"Int\xe9gration continue"))))}}],[{key:"scrollDown",value:function(){var e=document.getElementById("header").clientHeight;window.scroll({top:e,behavior:"smooth"})}},{key:"scrollDowner",value:function(){var e=document.getElementById("header").clientHeight,t=document.getElementById("cvSection").clientHeight;window.scroll({top:e+t,behavior:"smooth"})}},{key:"scrollDownest",value:function(){var e=document.getElementById("header").clientHeight,t=document.getElementById("cvSection").clientHeight,a=document.getElementById("schoolSection").clientHeight;window.scroll({top:e+t+a,behavior:"smooth"})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.e3f21846.chunk.js.map