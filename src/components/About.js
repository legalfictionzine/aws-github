import React from 'react';
import NavigationBar from "./NavigationBar";

const About = () => {
    return (
        <div id="about-page">
            <div className="col">
                <div className="page-title">About the maga(zine)</div>
                <div id="about-text">
                    Welcome to <span id="italicize">Legal Fiction</span>, where law is a fiction and fiction is the Law.  Founded in 2023, we are a small-circulation,  self-published magazine, featuring fiction, nonfiction, art, and criticism from Georgetown Law students, members of the greater DC community, and beyond. We started this  magazine to create an expressive space outside of traditional legal  discourse and to build a  loving
                    community. We are passionate about creativity, freeform legal thought, and liberation. The pieces we publish are meant to be thought provoking, not
                    prescriptive.<br/><br/>
                    Issue 0 features pieces from students, activists, and artists. A big thank you to all who contributed.<br/><br/>
                    P.S. We are accepting submissions for Issue 1 now. Reach out to us at
                    legalfictionzine@gmail.com or find us at @legalfictionzine.<br/><br/>
                    <b>Note on the Type:</b> Our title page is typeset in Redaction, a font  commissioned by Titus Kaphar and Reginald Dwayne Betts for their 2019 exhibition at MOMA PS1, The Redaction. The font borrows from classic legal typography; its pixelation is meant to represent how the legal system erases the poor and incarcerated from public  consciousness.<br/><br/>
                    <b>Editors:</b> <span id="italicize">Dylan Onderdonk-Snow, Ntebo Mokuena,    Megan  Dougherty, Evan Molineux, Sarah Marron, Kristin Abram, Maheen Haq, Ella Helmuth, David Snower</span>
                    <div className="d-flex justify-content-center">
                        <img id="submission-image-large" key="about-image" src="https://i.ibb.co/zQWfG3N/img-4.png" alt="about the maga(zine)"/><br/>
                    </div>
                    <span id="italicize">The views expressed in this publication do not necessarily reflect those of the  administration, faculty, or student body of Georgetown University or Georgetown Law unless specifically stated.</span>
                </div>
            </div>
        </div>
    );
}

export default About;

