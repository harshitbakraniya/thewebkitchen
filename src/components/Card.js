import React from "react";

const Card = (props) => {
    return (
        // <Zoom>
        <div class="card " key={props.val.id}>
            <div class="card-body">
                <img src={props.val.icon} alt="" />
                <h5 class="card-title">{props.val.title}</h5>
                <p class="card-text">{props.val.subtitle}</p>
            </div>
        </div >
        // </Zoom>
    );
}

export default Card;