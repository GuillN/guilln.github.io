import React from "react"

const School = props => {
    return (
        <div>
            <p className="text">
                {props.date}<br/>
                {props.school}: {props.fullName}<br/>
                {props.cycle}
            </p>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <img src={props.src} alt={`${props.name}_logo`} className={`${props.name}-logo`}/>
            </a>
            <p className="text small">{props.subj}</p>
            <p className="text-green">{props.subj2}</p>
        </div>
    )
};

export default School