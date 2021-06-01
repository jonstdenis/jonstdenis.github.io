import React from "react";
import
{
    Link
} from "react-router-dom";

export default class Navigation extends React.Component
{
    public render()
    {
        return (
            <div>
                <Link to="/">Jon St. Denis</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}