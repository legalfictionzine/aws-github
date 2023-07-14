import React from 'react';
import {getFirst150Words, getRestOfText} from "../utils/globalUtils"

const Submission = ({submission, issueNumber}) => {
    return (
        <div>
            <h1 id="submission-title">{submission.title}</h1>
            <h2 id="submission-author">{submission.author}</h2>

            <div id="submission-text" className="row">
                <div className="span4 collapse-group">
                    {submission.id !== 2
                        ? submission.text.split(" ").length > 150 ?
                            <>
                                <p>{getFirst150Words(submission.text)}</p>
                                <p>
                                    <a className="read-more" data-bs-toggle="collapse"
                                       href={"#collapse-" + submission.id}
                                       role="button"
                                       aria-expanded="false" aria-controls={"collapse-" + submission.id}>
                                        Read more &raquo;
                                    </a>
                                </p>
                                <div className="collapse" id={"collapse-" + submission.id}>
                                    <div className="card card-body">
                                        {getRestOfText(submission.text)}
                                    </div>
                                </div>
                            </> : <>{submission.text}</>
                        : <>{submission.text}</>
                    }
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

