(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/cv_en.51924b0e.png"},function(e,t,a){e.exports=a.p+"static/media/cv_en.53edafbd.pdf"},function(e,t,a){e.exports=a.p+"static/media/iseplogo.aee15beb.png"},function(e){e.exports={school_isep:"Engineer School",cycle:"Preparatory classes",subjects:"Mathematics, Physics, Engineer Sciences",subjects2:"Algorithmics, Python",subjects3:"SQL, HTML, JavaScript, CSS, Advanced Java",internship:"Internship",cycle2:"Engineering Course",subjects4:"JavaFX, JavaEE, Spring, NoSQL, PHP, ReactJS",integration:"Continuous integration"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/curved.54e3b0e8.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.46d1dddd.svg"},function(e,t,a){e.exports=a.p+"static/media/bluegithub.ec4ada87.svg"},function(e,t,a){e.exports=a.p+"static/media/chevron-arrow-down.53a1301e.svg"},function(e,t,a){e.exports=a.p+"static/media/darker-chevron-arrow-down.8e455b86.svg"},function(e,t,a){e.exports=a.p+"static/media/download.dd46779f.svg"},function(e,t,a){e.exports=a.p+"static/media/france.968aaa24.svg"},function(e,t,a){e.exports=a.p+"static/media/united-kingdom.e5564902.svg"},function(e,t,a){e.exports=a.p+"static/media/cv_fr.29d4766f.png"},function(e,t,a){e.exports=a.p+"static/media/cv_fr.50dfc0d7.pdf"},function(e,t,a){e.exports=a.p+"static/media/cnamlogo.fa0c5684.png"},function(e,t,a){e.exports=a.p+"static/media/cirruseo.ec98e66d.png"},function(e,t,a){e.exports=a.p+"static/media/appartoo.cc897495.png"},function(e){e.exports={school_isep:"\xc9cole d'Ing\xe9nieurs",cycle:"Cycle pr\xe9paratoire",subjects:"Math\xe9matiques, Physique, Sciences de l'Ing\xe9nieur",subjects2:"Algorithmique, Python",subjects3:"SQL, HTML, JavaScript, CSS, Java Avanc\xe9",internship:"Stage",cycle2:"Cycle ing\xe9nieur",subjects4:"JavaFX, JavaEE, Spring, NoSQL, PHP, ReactJS",integration:"Int\xe9gration contine"}},,,function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/darkest-chevron-arrow-down.2bdab533.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),s=a.n(c),r=(a(33),a(8)),o=a(9),i=a(25),m=a(10),d=a(26),u=a(1),g=a(11),p=a.n(g),h=a(12),v=a.n(h),E=a(13),b=a.n(E),f=a(14),N=a.n(f),w=a(15),y=a.n(w),S=(a(35),a(16)),x=a.n(S),j=a(17),k=a.n(j),C=a(18),_=a.n(C),O=a(19),D=a.n(O),H=a(2),I=a.n(H),T=a(20),J=a.n(T),L=a(3),M=a.n(L),F=a(4),P=a.n(F),B=a(21),A=a.n(B),q=a(22),G=a.n(q),Q=a(23),R=a.n(Q),V=a(24),W=a(5),X=(a(36),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"gnaassan@gmail.com",dl_txt:"Download CV",cv:I.a,dl_cv:M.a,strings:W,isScrolled:!1},a.copyToClipboard=a.copyToClipboard.bind(Object(u.a)(Object(u.a)(a))),t.scrollDown=t.scrollDown.bind(Object(u.a)(Object(u.a)(a))),t.scrollDowner=t.scrollDowner.bind(Object(u.a)(Object(u.a)(a))),t.scrollDownest=t.scrollDownest.bind(Object(u.a)(Object(u.a)(a))),a.handleScroll=a.handleScroll.bind(Object(u.a)(Object(u.a)(a))),a.cvEn=a.cvEn.bind(Object(u.a)(Object(u.a)(a))),a.cvFr=a.cvFr.bind(Object(u.a)(Object(u.a)(a))),a.stringsEn=a.stringsEn.bind(Object(u.a)(Object(u.a)(a))),a.stringsFr=a.stringsFr.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("word"),t=[],a=0;e[a].style.opacity=1;for(var n=0;n<e.length;n++)r(e[n]);function l(){for(var n=t[a],l=a===e.length-1?t[0]:t[a+1],r=0;r<n.length;r++)c(n,r);for(r=0;r<l.length;r++)"k"===l[r].innerHTML?l[r].className="letter behind space":l[r].className="letter behind",l[0].parentElement.style.opacity=1,s(l,r);a=a===t.length-1?0:a+1}function c(e,t){setTimeout(function(){"k"===e[t].innerHTML?e[t].className="letter out space":e[t].className="letter out"},80*t)}function s(e,t){setTimeout(function(){"k"===e[t].innerHTML?e[t].className="letter in space":e[t].className="letter in"},740+80*t)}function r(e){var a=e.innerHTML;e.innerHTML="";for(var n=[],l=0;l<a.length;l++){var c=document.createElement("span");"k"===a.charAt(l)?c.className="letter space":c.className="letter",c.innerHTML=a.charAt(l),e.appendChild(c),n.push(c)}t.push(n)}return l(),setInterval(l,4e3),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){return clearInterval(this.interval),window.removeEventListener("scroll",this.handleScroll)}},{key:"copyToClipboard",value:function(e){this.setState({email:"Copied !"});var t=document.createElement("textarea");t.innerText="gnaassan@gmail.com",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),e.target.focus()}},{key:"handleScroll",value:function(){var e=+window.scrollY;console.log(e);var t=e>=document.getElementById("header").clientHeight;return this.setState({isScrolled:t})}},{key:"cvEn",value:function(){this.setState({cv:I.a,dl_txt:"Download CV",dl_cv:M.a}),this.stringsEn()}},{key:"cvFr",value:function(){this.setState({cv:D.a,dl_txt:"T\xe9l\xe9charger CV",dl_cv:J.a}),this.stringsFr()}},{key:"stringsEn",value:function(){this.setState({strings:W})}},{key:"stringsFr",value:function(){this.setState({strings:V})}},{key:"render",value:function(){var e,a,n=this.state,c=n.email,s=n.cv,r=n.dl_txt,o=n.dl_cv,i=n.strings;this.state.scrollPosY;return"Download CV"===r?(e={marginRight:"5vmin",border:"solid #6981bd"},a={border:"transparent"}):(e={marginRight:"5vmin",border:"transparent"},a={border:"solid #6981bd"}),l.a.createElement("div",{className:"main"},l.a.createElement("header",{className:"header",id:"header"},l.a.createElement("div",{className:"top-logos"},l.a.createElement("div",{id:"email-logo",onClick:this.copyToClipboard},l.a.createElement("p",{id:"email-txt"},c),l.a.createElement("img",{src:v.a,className:"small-logo",alt:"mail_logo"})),l.a.createElement("a",{href:"https://github.com/guilln"},l.a.createElement("div",{id:"git-logo"},l.a.createElement("p",{id:"git-txt"},"github.com/GuillN"),l.a.createElement("img",{src:b.a,className:"small-logo",alt:"git_logo"})))),l.a.createElement("img",{src:p.a,className:"main-logo",alt:"logo"}),l.a.createElement("h1",{className:"title"},"Guillaume Naassan"),l.a.createElement("div",{className:"subtitle-first"},l.a.createElement("span",{className:"word green"},"Full-Stack Web"),l.a.createElement("span",{className:"word wisteria"},"Software"),l.a.createElement("span",{className:"subtitle"},"Developer")),l.a.createElement("img",{src:N.a,alt:"arrow_down",className:"small-logo",onClick:t.scrollDown})),l.a.createElement("nav",null),l.a.createElement("section",{className:"cvSection",id:"cvSection"},l.a.createElement("div",{className:"dlCv"},l.a.createElement("img",{src:s,alt:"cv",className:"cv"}),l.a.createElement("div",{className:"dl"},l.a.createElement("a",{href:o,className:"texts"},l.a.createElement("p",{className:"dl-txt"},r),l.a.createElement("img",{src:x.a,alt:"dl",className:"dl-icon"})),l.a.createElement("div",{className:"flags"},l.a.createElement("img",{src:_.a,alt:"uk_flag",className:"flag",onClick:this.cvEn,style:e}),l.a.createElement("img",{src:k.a,alt:"fr_flag",className:"flag",onClick:this.cvFr,style:a})))),l.a.createElement("img",{src:y.a,alt:"arrow_down",className:"small-logo",onClick:t.scrollDowner})),l.a.createElement("section",{className:"schoolSection",id:"schoolSection"},l.a.createElement("h2",{className:"school-title"},"Formation"),l.a.createElement("p",{className:"text"},"2013 - 2016",l.a.createElement("br",null),i.school_isep,": Institut Sup\xe9rieur d'\xc9lectronique de Paris",l.a.createElement("br",null),i.cycle),l.a.createElement("img",{src:P.a,alt:"isep_logo",className:"isep-logo"}),l.a.createElement("p",{className:"text small"},i.subjects),l.a.createElement("p",{className:"text-green"},i.subjects2),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",{className:"text"},"2016 - 2017",l.a.createElement("br",null),"Conservatoire National des Arts et M\xe9tiers"),l.a.createElement("img",{src:A.a,alt:"cnam_logo",className:"cnam-logo"}),l.a.createElement("p",{className:"text-green"},i.subjects3,l.a.createElement("br",null),l.a.createElement("hr",{className:"small-line"}),i.internship,": Cirruseo"),l.a.createElement("div",{className:"internship-container"},l.a.createElement("img",{src:G.a,alt:"cirruseo_logo",className:"internship-logo"}),l.a.createElement("p",{className:"internship-text"},"Google Script",l.a.createElement("br",null),"Google Cloud Engine",l.a.createElement("br",null),"NodeJS")),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",{className:"text"},"2017 - 2019",l.a.createElement("br",null),i.school_isep,": Institut Sup\xe9rieur d'\xc9lectronique de Paris",l.a.createElement("br",null),i.cycle2),l.a.createElement("img",{src:P.a,alt:"isep_logo",className:"isep-logo"}),l.a.createElement("p",{className:"text-green"},i.subjects4,l.a.createElement("br",null),l.a.createElement("hr",{className:"small-line"}),i.internship,": Appartoo"),l.a.createElement("div",{className:"internship-container"},l.a.createElement("img",{src:R.a,alt:"appartoo_logo",className:"internship-logo"}),l.a.createElement("p",{className:"internship-text"},"Symfony",l.a.createElement("br",null),"ExpressJS",l.a.createElement("br",null),"AngularJS",l.a.createElement("br",null),"Angular7",l.a.createElement("br",null),"MongoDB",l.a.createElement("br",null),i.integration))))}}],[{key:"scrollDown",value:function(){var e=document.getElementById("header").clientHeight;window.scroll({top:e,behavior:"smooth"})}},{key:"scrollDowner",value:function(){var e=document.getElementById("header").clientHeight,t=document.getElementById("cvSection").clientHeight;window.scroll({top:e+t,behavior:"smooth"})}},{key:"scrollDownest",value:function(){var e=document.getElementById("header").clientHeight,t=document.getElementById("cvSection").clientHeight,a=document.getElementById("schoolSection").clientHeight;window.scroll({top:e+t+a,behavior:"smooth"})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,2,1]]]);
//# sourceMappingURL=main.49f3e85a.chunk.js.map