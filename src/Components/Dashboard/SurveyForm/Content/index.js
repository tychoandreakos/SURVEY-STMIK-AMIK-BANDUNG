import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TYPE_BUTTON, SURVEY_FORM_BUILDER, SURVEY_FORM_QUESTION } from '../../../../util/varTypes'

// formBuilder
import HeaderForm from '../Form/Header'
import Result from '../Result'
import NewQuestion from '../Form/NewQuestionFirst'
import QuestionAnsweredForm from '../Form/QuestionAnsweredForm';

import BtnOpt from '../BtnOpt';
import FormBuilderContext from '../../../../Store/Context/formBuilder'

import './style.scss';


const ContentSurveyForm = (props) => {
    const [typeQuestion, setTypeQuestion] = useState()

    const { question } = props;

    const typeHandler = (val) => {
        setTypeQuestion(val)
    }

    let renderQuestion = [];
    if (question) {
        question.forEach((survey, index) => {
            renderQuestion = [
                ...renderQuestion,
                (
                    <Result
                        key={survey._id}
                        index={index + 1}
                        _id={survey._id}
                        title={survey.title}
                        desc={survey.desc}
                        type={survey.type}
                        data={survey.item}
                    />

                )
            ]
        })
    }

    const [initial, setInitial] = useState(false)
    const [formBuilder, setFormBuilder] = useState(false);

    const formBuilderHidden = () => {
        setFormBuilder(false)
    }


    useEffect(() => {
        if (!initial) {
            setInitial(true)
        } else {
            if (typeQuestion.length > 1) {
                setFormBuilder(true)
            }
        }
    }, [typeQuestion]);


    let questionEl;
    if (formBuilder) {
        questionEl = (
            <FormBuilderContext.Provider value={{ typeHandler, typeQuestion, formBuilderHidden }}>
                <QuestionAnsweredForm numbered={`q${question ? question.length + 1 : 1}`} />
            </FormBuilderContext.Provider>
        )
    }

    return (
        <div className="content-survey-form">
            <div className="btn-wrapper">
                <BtnOpt type={TYPE_BUTTON.OK} />
            </div>
            <div className="survey-wrapper">
                <HeaderForm />
                <div className="form-builder">
                    {renderQuestion}
                    {questionEl}
                    <NewQuestion formatHandler={typeHandler} />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        question: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION]
    }
}

const ContentSurveyFormJoinRedux = connect(mapStateToProps)(ContentSurveyForm)

export default ContentSurveyFormJoinRedux;