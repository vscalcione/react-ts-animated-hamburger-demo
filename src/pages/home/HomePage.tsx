import React, { FC } from "react";
import {NavLink} from "react-router-dom";

export const HomePage: FC = () => {
    return (
        <div className="page">
            <div className="page-wrapper">
                <h3 className="title"> Home Page </h3>
                <p> Nothing to show! </p>
                <NavLink to="/">
                    <i className="fa fa-times close-button"/>
                </NavLink>
            </div>
        </div>
    );
};