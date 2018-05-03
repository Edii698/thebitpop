import React from "react";


const Thumbs = props => (

    <div className="col-sm-3">
        <span onClick={() => props.onClick(props.id, props.clicked)}>
            <img className="char-img" src={props.image}  id={props._id} />
        </span>
    </div>
);

export default Thumbs;