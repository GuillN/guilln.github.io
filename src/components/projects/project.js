import React from 'react'

const Project = props => {
    const id = props.id;
    const name = props.name;
    return (
        <div id={`project${id}`} className="project-container">
            <h3 className="project-title">{name.toUpperCase()}</h3>
            <img id={`img${id}`} className="project-image" src={props.src} alt={`${name}-img`}/>
            <div id={`txt${id}`}>
                <p className="project-text">{props.desc}</p>
                <p className="project-text">{props.tech}</p>
                {props.desc2 === "" ? "" : <p className="project-text">{props.desc2}</p>}
                {props.tech2 === "" ? "" : <p className="project-text">{props.tech2}</p>}
            </div>
        </div>
    )
};

export default Project