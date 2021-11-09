import React from "react";

const Card = (props) => {
    return (
        <div class="card col-12 col-md-4" key={props.val.id}>
            <div class="card-body">
                <img src={props.val.icon} alt="" />
                <h5 class="card-title">{props.val.title}</h5>
                <p class="card-text">{props.val.subtitle}</p>
            </div>
        </div >
    );
}

export default Card;