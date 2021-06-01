import React from "react";
import "./HomePage.module.css";
import CSS from "csstype";

import ProfileImage from "../Resources/Images/Profile.png";

export default class HomePage extends React.Component
{
    private _titleStyle: CSS.Properties = {
        fontSize: "5em"
    };
    public render()
    {
        return (
            <div>
                <h1 style={this._titleStyle}>About Jon St. Denis</h1>
                <p>Jon St. Denis is a former journalist in Europe, filing stories from Austria, Italy, France, Greece, and Ireland. A college professor in California, St. Denis writes compelling historical mysteries with thriller and international espionage elements.</p>
                <p>Mr. St. Denis is represented by Anne Tibbets at Donald Maass Literary Agency.</p>
                <div >
                    <img src={ProfileImage} className={"ProfileImage"} />
                </div>

            </div>
        );
    }
}