import React from "react";
import Fade from 'react-reveal/Fade';

const Card = (props) => {
    return (
        // <Fade top>
        <div class="card " key={props.val.id}>
            <div class="card-body">
                <img src={props.val.icon} alt="" />
                <h5 class="card-title">{props.val.title}</h5>
                <p class="card-text">{props.val.subtitle}</p>
            </div>
        </div >
        // </Fade>
    );
}

export default Card;