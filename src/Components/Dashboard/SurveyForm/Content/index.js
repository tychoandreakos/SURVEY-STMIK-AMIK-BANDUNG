import React, { useState, useEffect } from 'react';
import { TYPE_QUESTION, TYPE_BUTTON } from '../../../../util/varTypes'
import { v4 as uuid } from 'uuid';

// // formBuilder
import HeaderForm from '../Form/Header';
import NewQuestion from '../Form/NewQuestionFirst';
import MultiChoice from '../Form/MultiChoice';
import SingleTextBox from '../Form/SingleTextBox';
import Result from '../Result';

import BtnOpt from '../BtnOpt';
import FormBuilderContext from '../../../../Store/Context/formBuilder'

import './style.scss';


const ContentSurveyForm = () => {
    const [dropdown, setDropdown] = useState(false)
    const [question, setQuestion] = useState([])
    const [typeQuestion, setTypeQuestion] = useState()

    const typeHandler = (val) => {
        setTypeQuestion(val)
    }

    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }

    const questionHandler = (val) => {
        setQuestion([
            ...question,
            {
                _id: uuid(),
                ...val
            },
        ])
    }

    const multiChoiceHandler = (val) => {
        setQuestion([
            ...val
        ])
    }

    let renderQuestion = [];
    question.forEach((item, index) => {
        if (item.type === TYPE_QUESTION.SHORT) {
            renderQuestion.push((<Result key={item._id} index={index + 1} title={item.title} desc={item.desc} />))
        }

        if (item.type === TYPE_QUESTION.MULTIPLE) {
            renderQuestion.push((
                <Result key={item._id} index={index + 1} title={item.title} desc={item.desc}>
                    {item.choices.map(choice => (
                        <MultiChoice key={choice._id} selected={choice.selected} title={choice.title} />
                    ))}
                    <div className="multichoice">
                        <FormBuilderContext.Provider value={{ question, multiChoiceHandler }}>
                            <MultiChoice _id={item._id} key={item._id} />
                        </FormBuilderContext.Provider>
                    </div>
                </Result>
            ))
        }
    })

    const [initial, setInitial] = useState(false)
    const [formBuilder, setFormBuilder] = useState(false);

    const formBuilderHidden = () => {
        setFormBuilder(false)
    }

    useEffect(() => {
        if (!initial) {
            setInitial(true)
        } else {
            setFormBuilder(true)
        }
    }, [typeQuestion]);


    let questionEl;
    if (formBuilder) {
        questionEl = (
            <FormBuilderContext.Provider value={{ question, questionHandler, formBuilderHidden }}>
                <SingleTextBox title={`q${question.length + 1}`} typeQuestion={typeQuestion} />
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

export default ContentSurveyForm;