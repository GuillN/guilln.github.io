import React from "react"
import Project from "./project"
import "./projects.css"
import luxo from "../../images/luxo.png"
import snork2 from "../../images/snorkunking_ig.PNG"
import appartoo from "../../images/appartoo.png"
import monita from "../../images/monita.png"
import website from "../../images/website.png"
import classrooms from "../../images/classrooms.png"
import emgalai from "../../images/emgalai.png"
import dchroma from "../../images/dchroma.png"
import gatling from "../../images/gatling.png"

const Projects = props => {
    return (
        <section className="projects-section">
            <h2 className="projects-title">{props.strings.projects_title}</h2>

            <Project id={1} name='luxo' src={luxo} desc={props.strings.project.luxo.description}
                     tech={props.strings.project.luxo.tech} desc2="" tech2=""/>

            <Project id={2} name='snorkunking' src={snork2} desc={props.strings.project.snorkunking.description}
                     tech={props.strings.project.snorkunking.tech} desc2="" tech2=""/>

            <Project id={3} name='appartoo' src={appartoo} desc={props.strings.project.appartoo.description}
                     tech={props.strings.project.appartoo.tech} desc2={props.strings.project.appartoo.description2}
                     tech2={props.strings.project.appartoo.tech2}/>

            <Project id={4} name='monita' src={monita} desc={props.strings.project.monita.description}
                     tech={props.strings.project.monita.tech} desc2="" tech2=""/>

            <Project id={5} name='portfolio' src={website} desc={props.strings.project.website.description}
                     tech={props.strings.project.website.tech} desc2="" tech2=""/>

            <Project id={6} name='classrooms' src={classrooms} desc={props.strings.project.classrooms.description}
                     tech={props.strings.project.classrooms.tech} desc2="" tech2=""/>

            <Project id={7} name='ëmgalaï grafik' src={emgalai} desc={props.strings.project.emgalai.description}
                     tech={props.strings.project.emgalai.tech} desc2="" tech2=""/>

            <Project id={8} name='dchroma' src={dchroma} desc={props.strings.project.dchroma.description}
                     tech={props.strings.project.dchroma.tech} desc2="" tech2=""/>

            <Project id={9} name='gatling license manager' src={gatling} desc={props.strings.project.gatling.description}
                     tech={props.strings.project.gatling.tech} desc2="" tech2=""/>
        </section>
    )
}

export default Projects
