import React from "react";
import iconEllipsis from '../../images/icon-ellipsis.svg';
import './item.css';

const Item = (props)=>{
    return(
        <div className={"trackerItem "+props.title}>
            <div className="trackerInfo">
                <div className="header">
                    <span className="title">{props.title}</span>
                    <img src={iconEllipsis} alt="settings"/>
                </div>
                <div className="body">
                    <span className="hours">{props.hours}hrs</span>
                    <span className="prevLog">last week - {props.prevLog}hrs</span>
                </div>
            </div>
        </div>
    )
}

export default Item;