import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { MapQuest } from "../../shared/MapQuest";
import { ContactForm } from "./components/ContactForm";

export const ContactsPage: FC = () => {
    return (
        <div className="page">
            <div className="page-wrapper">
                <h2 className="title"> Contacts </h2>
                <ContactForm />
                <MapQuest city="Trieste" width={250} height={200} />
                <NavLink to="/">
                    <i className="fa fa-times close-button" />
                </NavLink>
            </div>
        </div>
    );
};