import React from 'react';
import {getFirst100Words, getRestOfText} from "../utils/globalUtils"

const Submission = ({submission, issueNumber}) => {

    const displayedText = getFirst100Words(submission.text);
    const hiddenText = getRestOfText(submission.text);
    return (
        <div>
            <h1 id="submission-title">{submission.title}</h1>
            <h2 id="submission-author">{submission.author}</h2>
            <div id="submission-text">
                {submission.text.split(" ").length > 100 ?
                    <>
                        {displayedText}
                        <div id={"wrap-collabsible"+submission.id}>
                            <input id="collapsible" id={"toggle"+submission.id} type="checkbox"/>
                            <label htmlFor="collapsible" id={"lbl-toggle-"+submission.id}>Read more</label>
                            <div id={"collapsible-content"+submission.id}>
                                <div id={"content-inner"+submission.id}><p>{hiddenText}</p>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>{displayedText}</>}
            </div>
            {
                submission.images.map(image => (
                    <img id={"submission-image-" + image.size} key={image.url}
                         src={"/images/Issue " + issueNumber + "/" + image.url} alt={image.alt}/>
                ))
            }
            <div id="submission-footnote">{submission.footnote}</div>
        </div>
    );
}

export default Submission;

