import React from "react"
import School from "./school";
import isep from "../../images/iseplogo.png";
import cnam from "../../images/cnamlogo.png";
import cirruseo from "../../images/cirruseo.png";
import appartoo_logo from "../../images/appartoo_logo.png";
import upv from "../../images/upvlogo.png";
import chevron2 from "../../images/darkest-chevron-arrow-down.svg";

const Schools = props => {

    return (
        <section className="schoolSection" id="schoolSection">
            <h2 className="school-title">Formation</h2>
            <School date="2013 - 2016" school={props.strings.school_isep} cycle={props.strings.cycle}
                    fullName="Institut Supérieur d'Électronique de Paris" href="https://www.isep.fr/"
                    src={isep} name="isep" subj={props.strings.subjects} subj2={props.strings.subjects2}
                    internship="" internshipName="" internshipHref="" internshipSrc="" internshipText=""/>
            {/*<p className="text">*/}
            {/*    2013 - 2016<br/>*/}
            {/*    {props.strings.school_isep}: Institut Supérieur d'Électronique de Paris<br/>*/}
            {/*    {props.strings.cycle}*/}
            {/*</p>*/}
            {/*<a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">*/}
            {/*    <img src={isep} alt="isep_logo" className="isep-logo"/>*/}
            {/*</a>*/}
            {/*<p className="text small">{props.strings.subjects}</p>*/}
            {/*<p className="text-green">{props.strings.subjects2}</p>*/}
            <hr className="line"/>

            <School date="2016 - 2017" school="" cycle=""
                    fullName="Conservatoire National des Arts et Métiers" href="http://www.cnam.fr/"
                    src={cnam} name="cnam" subj={props.strings.subjects3} subj2="" internship={props.strings.internship}
                    internshipName="cirruseo" internshipHref="https://www.cirruseo.com/" internshipSrc={cirruseo}
                    internshipText={["Google Script", "Google Cloud Platform", "NodeJS"]}/>


            {/*<p className="text">*/}
            {/*    2016 - 2017<br/>*/}
            {/*    Conservatoire National des Arts et Métiers*/}
            {/*</p>*/}
            {/*<a target="_blank" rel="noopener noreferrer" href="http://www.cnam.fr/">*/}
            {/*    <img src={cnam} alt="cnam_logo" className="cnam-logo"/>*/}
            {/*</a>*/}
            {/*<p className="text-green">*/}
            {/*    {props.strings.subjects3}<br/>*/}
            {/*    <hr className="small-line"/>*/}
            {/*    {props.strings.internship}: Cirruseo*/}
            {/*</p>*/}
            {/*<div className="internship-container">*/}
            {/*    <a target="_blank" rel="noopener noreferrer" href="https://www.cirruseo.com/">*/}
            {/*        <img src={cirruseo} alt="cirruseo_logo" className="internship-logo"/>*/}
            {/*    </a>*/}
            {/*    <p className="internship-text">*/}
            {/*        Google Script<br/>*/}
            {/*        Google Cloud Engine<br/>*/}
            {/*        NodeJS*/}
            {/*    </p>*/}
            {/*</div>*/}






            <hr className="line"/>
            <p className="text">
                2017 - 2019<br/>
                {props.strings.school_isep}: Institut Supérieur d'Électronique de Paris<br/>
                {props.strings.cycle2}
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">
                <img src={isep} alt="isep_logo" className="isep-logo"/>
            </a>
            <p className="text-green">
                {props.strings.subjects4}<br/>
                <hr className="small-line"/>
                {props.strings.internship}: Appartoo
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
                    {props.strings.integration}
                </p>
            </div>
            <hr className="line"/>
            <p className="text">
                2019 - 2020<br/>
                UPV - Universitat Politècnica de València<br/>
                Erasmus
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.isep.fr/">
                <img src={upv} alt="upv_logo" className="upv-logo"/>
            </a>
            <p className="text-green">
                {props.strings.subjects5}
            </p>
            <img src={chevron2} alt="arrow_down" className="small-logo" onClick={props.scrollDownest}/>
        </section>
    )
};

export default Schools