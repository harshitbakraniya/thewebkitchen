import React from "react";
import Fade from "react-reveal/Fade";

const Title = (props) => {
    return (
        <Fade top>
            <div className="title-div text-center">
                <h1 className="title">{props.inTitle}</h1>
                <div className="underline">
                    <div className="mainline"></div>
                </div>
            </div>
        </Fade>
    )
}

export default Title;