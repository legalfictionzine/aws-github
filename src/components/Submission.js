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
                        <button type="button" className="collapsible">Read more</button>
                        <div id={"submission-text-" + submission.id}>
                            {hiddenText}
                        </div>
                    </>
                : <>{displayedText}</>
                }
            </div>
            {
                submission.images.map(image => (
                    <img id={"submission-image-" + image.size} key={image.url} src={"/images/Issue " + issueNumber + "/" + image.url} alt={image.alt}/>
                ))
            }
            <div id="submission-footnote">{submission.footnote}</div>
        </div>
    );
}

export default Submission;

