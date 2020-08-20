import React from 'react';
import { connect } from 'react-redux';

import MultiChoiceAnwered from '../Form/AnsweredForm/MultiChoice';

import { TYPE_QUESTION, SURVEY_FORM_QUESTION, SURVEY_FORM_BUILDER } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type, surveyData } = props;

    let renderingForm;
    if (type === TYPE_QUESTION.SHORT) {
        renderingForm = <div className="placeholder"></div>
    }

    if (type === TYPE_QUESTION.MULTIPLE) {
        renderingForm = (
            <div className="multichoice-answered-question">
                <MultiChoiceAnwered title="damn" />
                <MultiChoiceAnwered title="you" />
                <MultiChoiceAnwered title="stark" />
            </div>
        )
    }

    console.log(surveyData)

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

const mapStateToProps = (state) => {
    return {
        surveyData: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION]
    }
}

const ResultSurveyJoinRedux = connect(mapStateToProps)(ResultSurvey);

export default ResultSurveyJoinRedux;