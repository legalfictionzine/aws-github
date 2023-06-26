import React from 'react';
import {Submissions} from '../data/submissions';
import Submission from '../components/Submission';

const Home = () => {
    const currentIssue = {
        number: Submissions[0].issueNumber,
        date: Submissions[0].issueDate
    }
    return (
        <div>
            <div id="sticky">
                <div id="issue-number-and-date">
                    Issue
                    <span>
                        <select name="issue-number" id="issue-number">
                            {
                                Submissions.map(issue => (
                                    <option value={issue.issueNumber}>{issue.issueNumber}</option>
                                ))
                            }
                        </select>
                    </span>
                    | {currentIssue.date}</div>
            </div>
            <div>
                {
                    Submissions[0].entries.map(entry => (
                            <Submission key={entry.id} submission={entry} issueNumber={currentIssue.number}/>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Home;

