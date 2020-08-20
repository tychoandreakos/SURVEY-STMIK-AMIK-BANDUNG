import React from 'react';

import MultiChoiceAnwered from '../Form/AnsweredForm/MultiChoice';

import { TYPE_QUESTION, SURVEY_FORM_QUESTION, SURVEY_FORM_BUILDER } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type, data } = props;

    let renderingForm;
    if (type === TYPE_QUESTION.SHORT) {
        renderingForm = <div className="placeholder"></div>
    }

    if (type === TYPE_QUESTION.MULTIPLE) {
        renderingForm = (
            <div className="multichoice-answered-question">
                {data.map(item => (
                    <MultiChoiceAnwered
                        key={item._id} t
                        title={item.title}
                        selected={item.selected}
                    />
                ))}

            </div>
        )
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