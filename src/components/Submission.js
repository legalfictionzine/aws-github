import React from 'react';
import {getFirst150Words, getRestOfText} from "../utils/globalUtils"

const Submission = ({submission, issueNumber}) => {

    const displayedText = getFirst150Words(submission.text);
    const hiddenText = getRestOfText(submission.text);
    return (
        <div>
            <h1 id="submission-title">{submission.title}</h1>
            <h2 id="submission-author">{submission.author}</h2>


            <div id="submission-text" className="row">
                <div className="span4 collapse-group">
                    {submission.text.split(" ").length > 150 ?
                        <>
                            <p>{displayedText}</p>
                            <p>
                                <a className="read-more" data-bs-toggle="collapse" href="#collapseExample"
                                   role="button"
                                   aria-expanded="false" aria-controls="collapseExample">
                                    Read more &raquo;
                                </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    {hiddenText}
                                </div>
                            </div>
                        </> : <>{displayedText}</>}
                </div>
                {
                    submission.images.map(image => (
                        <img id={"submission-image-" + image.size} key={image.url}
                             src={"/images/Issue " + issueNumber + "/" + image.url} alt={image.alt}/>
                    ))
                }
                <div id="submission-footnote">{submission.footnote}</div>
            </div>
        </div>
    );
}

export default Submission;

