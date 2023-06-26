import React from 'react';
import {Link} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <div id="navigation-bar">
            <div className="row justify-content-between">
                <div className="col-4">
                    <Link id="magazine-title-link" to="/">
                        <h1 id="magazine-title">LEGAL FICTION:</h1>
                        <h3 id="magazine-subtitle">A Magazine</h3>
                    </Link>
                </div>
                <div className="col-4">
                    <Link id="navigation-link" to="about">ABOUT</Link>
                    <Link id="navigation-link" to="submissions">SUBMISSIONS</Link>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
