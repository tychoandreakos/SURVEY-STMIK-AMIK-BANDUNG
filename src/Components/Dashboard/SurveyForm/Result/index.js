import React from 'react';

import { TYPE_QUESTION } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type } = props;
    
    let renderingForm;
    if (type === TYPE_QUESTION.SHORT) {
        renderingForm = <div className="placeholder"></div>
    }

    if (type === TYPE_QUESTION.MULTIPLE) {
        renderingForm = <h3>its work</h3>
    }

    return (
        <>
            <div className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                {renderingForm}
            </div>
            <div className="separator-survey"></div>
        </>
    )
}

export default ResultSurvey;