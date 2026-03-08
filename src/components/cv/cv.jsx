import React from "react"
import "./cv.css"
import dl from "../../images/download.svg"
import uk from "../../images/united-kingdom.svg"
import fr from "../../images/france.svg"
import chevron1 from "../../images/darker-chevron-arrow-down.svg"
import strings_en from "../../strings/strings_en"
import strings_fr from "../../strings/strings_fr"

const Cv = props => {

    let ukFlagStyle, frFlagStyle
    if (props.strings === strings_en) {
        ukFlagStyle = {
            marginRight: '5vmin',
            border: 'solid #6981bd'
        }

        frFlagStyle = {
            border: 'transparent'
        }
    } else if (props.strings === strings_fr) {
        ukFlagStyle = {
            marginRight: '5vmin',
            border: 'transparent'
        }
        frFlagStyle = {
            border: 'solid #6981bd'
        }
    }

    return (
        <section className="cvSection" id="cvSection">
            <div className="dlCv">
                <img src={props.cv} alt="cv" className="cv"/>
                <div className="dl">
                    <a href={props.dl_cv} className="texts">
                        <p className="dl-txt">{props.strings.download}</p>
                        <img src={dl} alt="dl" className="dl-icon"/>
                    </a>
                    <div className="flags">
                        <img src={uk} alt="uk_flag" className="flag" onClick={props.stringsEn} style={ukFlagStyle}/>
                        <img src={fr} alt="fr_flag" className="flag" onClick={props.stringsFr} style={frFlagStyle}/>
                    </div>
                </div>
            </div>
            <img src={chevron1} alt="arrow_down" className="small-logo" onClick={props.scrollDowner}/>
        </section>
    )
}

export default Cv
