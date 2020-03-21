import React from "react"
import cirruseo from "../../images/cirruseo.png";

const School = props => {
    return (
        <div>
            <p className="text">
                {props.date}<br/>
                {props.school === "" ? <p>{props.fullName}</p> : <p>{props.school}: {props.fullName}</p>}<br/>
                {props.cycle === "" ? "" : <p>{props.cycle}</p>}
            </p>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <img src={props.src} alt={`${props.name}_logo`} className={`${props.name}-logo`}/>
            </a>
            <p className="text small">{props.subj}</p>
            {props.subj2 === "" ? "" : <p className="text-small">{props.subj2}</p>}
            {
                props.internship === "" ? "" :
                    <div>
                        <hr className="small-line"/>
                        <p>{props.internship}: {props.internshipName.toUpperCase()}</p>
                        <div className="internship-container">
                            <a target="_blank" rel="noopener noreferrer" href={props.internshipHref}>
                                <img src={props.internshipSrc} alt={`${props.internshipName}_logo`} className="internship-logo"/>
                            </a>
                            <p className="internship-text">
                                {props.internshipText.map(item => {
                                    return <div><p>{item}</p><br/></div>
                                })}
                            </p>
                        </div>
                    </div>
            }
        </div>
    )
};

export default School