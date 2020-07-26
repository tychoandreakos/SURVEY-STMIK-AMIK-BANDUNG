import React from 'react';

import './style.scss';

const ResultSurvey = ({ index, title, desc, children }) => {
    return (
        <>
            <div className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                {children ? children : <div className="placeholder"></div>}
            </div>
            <div className="separator-survey"></div>
        </>
    )
}

export default ResultSurvey;