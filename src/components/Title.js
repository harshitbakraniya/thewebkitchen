import React from "react";

const Title = (props) => {
    return (
        <div className="title-div text-center">
            <h1 className="title">{props.inTitle}</h1>
            <div className="underline">
                <div className="mainline"></div>
            </div>
        </div>
    )
}

export default Title;