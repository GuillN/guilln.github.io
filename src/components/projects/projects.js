import React from "react"
import luxo from "../../images/luxo.png";
import snork2 from "../../images/snorkunking_ig.PNG";
import appartoo from "../../images/appartoo.png";
import monita from "../../images/monita.png";
import website from "../../images/website.png";
import classrooms from "../../images/classrooms.png";
import emgalai from "../../images/emgalai.png";
import dchroma from "../../images/dchroma.png";
import Project from "./project";

const Projects = props => {
    return (
        <section className="projects-section">
            <h2 className="projects-title">{props.strings.projects_title}</h2>
            <Project id={1} name='luxo' src={luxo} desc={props.strings.project.luxo.description}
                     tech={props.strings.project.luxo.tech}/>
            {/*<div id="project1" className="project-container">*/}
            {/*    <h3 className="project-title">Luxo</h3>*/}
            {/*    <img id="img1" className="project-image" src={luxo} alt="luxo-img"/>*/}
            {/*    <div id="txt1">*/}
            {/*        <p className="project-text">{props.strings.project.luxo.description}</p>*/}
            {/*        <p className="project-text">{props.strings.project.luxo.tech}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div id="project2" className="project-container">
                <h3 className="project-title">Snorkunking</h3>
                <img id="img2" className="project-image" src={snork2} alt="snork-img-2"/>
                <div id="txt2">
                    <p className="project-text">{props.strings.project.snorkunking.description}</p>
                    <p className="project-text">{props.strings.project.snorkunking.tech}</p>
                </div>
            </div>
            <div id="project3" className="project-container">
                <h3 className="project-title">Appartoo</h3>
                <img id="img3" className="project-image" src={appartoo} alt="appartoo-img"/>
                <div id="txt3">
                    <p className="project-text">{props.strings.project.appartoo.description}</p>
                    <p className="project-text">{props.strings.project.appartoo.tech}</p>
                    <p className="project-text">{props.strings.project.appartoo.description2}</p>
                    <p className="project-text">{props.strings.project.appartoo.tech2}</p>
                </div>
            </div>
            <div id="project4" className="project-container">
                <h3 className="project-title">Monita</h3>
                <img id="img4" className="project-image" src={monita} alt="monita-img"/>
                <div id="txt4">
                    <p className="project-text">{props.strings.project.monita.description}</p>
                    <p className="project-text">{props.strings.project.monita.tech}</p>
                </div>
            </div>
            <div id="project5" className="project-container">
                <h3 className="project-title">Portfolio</h3>
                <img id="img5" className="project-image" src={website} alt="website-img"/>
                <div id="txt5">
                    <p className="project-text">{props.strings.project.website.description}</p>
                    <p className="project-text">{props.strings.project.website.tech}</p>
                </div>
            </div>
            <div id="project6" className="project-container">
                <h3 className="project-title">Classrooms</h3>
                <img id="img6" className="project-image" src={classrooms} alt="classrooms-img"/>
                <div id="txt6">
                    <p className="project-text">{props.strings.project.classrooms.description}</p>
                    <p className="project-text">{props.strings.project.classrooms.tech}</p>
                </div>
            </div>
            <div id="project7" className="project-container">
                <h3 className="project-title">Ëmgalaï Grafik</h3>
                <img id="img7" className="project-image" src={emgalai} alt="emgalai-img"/>
                <div id="txt7">
                    <p className="project-text">{props.strings.project.emgalai.description}</p>
                    <p className="project-text">{props.strings.project.emgalai.tech}</p>
                </div>
            </div>
            <div id="project8" className="project-container">
                <h3 className="project-title">DChroma</h3>
                <img id="img8" className="project-image" src={dchroma} alt="dchroma-img"/>
                <div id="txt8">
                    <p className="project-text">{props.strings.project.dchroma.description}</p>
                    <p className="project-text">{props.strings.project.dchroma.tech}</p>
                </div>
            </div>
        </section>
    )
};

export default Projects