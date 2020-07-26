import React from 'react';

import './style.scss';

const ResultSurvey = ({ index, title, desc }) => {
    return (
        <>
            <div className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                <div className="placeholder"></div>
            </div>
            <div className="separator-survey"></div>
        </>
    )
}

export default ResultSurvey;