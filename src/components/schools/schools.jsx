import React from "react"
import "./schools.css"
import School from "./school"
import isep from "../../images/iseplogo.png"
import cnam from "../../images/cnamlogo.png"
import cirruseo from "../../images/cirruseo.png"
import appartoo_logo from "../../images/appartoo_logo.png"
import upv from "../../images/upvlogo.png"
import chevron2 from "../../images/darkest-chevron-arrow-down.svg"

const Schools = props => {
    return (
        <section className="schoolSection" id="schoolSection">
            <h2 className="school-title">Formation</h2>

            <School date="2013 - 2016" school={props.strings.school_isep} cycle={props.strings.cycle}
                    fullName="Institut Supérieur d'Électronique de Paris" href="https://www.isep.fr/"
                    src={isep} name="isep" subj={props.strings.subjects} subj2={props.strings.subjects2}
                    internship="" internshipName="" internshipHref="" internshipSrc="" internshipText=""/>

            <hr className="line"/>

            <School date="2016 - 2017" school="" cycle=""
                    fullName="Conservatoire National des Arts et Métiers" href="http://www.cnam.fr/"
                    src={cnam} name="cnam" subj={props.strings.subjects3} subj2="" internship={props.strings.internship}
                    internshipName="cirruseo" internshipHref="https://www.cirruseo.com/" internshipSrc={cirruseo}
                    internshipText={["Google Script", "Google Cloud Platform", "NodeJS"]}/>

            <hr className="line"/>

            <School date="2017 - 2019" school={props.strings.school_isep} cycle={props.strings.cycle2}
                    fullName="Institut Supérieur d'Électronique de Paris" href="https://www.isep.fr/"
                    src={isep} name="isep" subj={props.strings.subjects4} subj2="" internship={props.strings.internship}
                    internshipName="appartoo" internshipHref="https://www.appartoo.com/" internshipSrc={appartoo_logo}
                    internshipText={["Symfony", "ExpressJS", "AngularJS", "Angular7", "MongoDB", "Continuous integration"]}/>

            <hr className="line"/>

            <School date="2019 - 2020" school="" cycle="Erasmus"
                    fullName="UPV - Universitat Politècnica de València" href="https://www.upv.es/"
                    src={upv} name="upv" subj={props.strings.subjects5} subj2=""
                    internship="" internshipName="" internshipHref="" internshipSrc="" internshipText=""/>

            <br/>
            <img src={chevron2} alt="arrow_down" className="small-logo" onClick={props.scrollDownest}/>
        </section>
    )
}

export default Schools
