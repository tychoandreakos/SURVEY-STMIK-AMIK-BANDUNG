import React, { useState } from 'react';
import { TYPE_QUESTION } from '../../../../util/varTypes'

// // formBUilder
import MultiChoice from '../Form/MultiChoice';
import SingleTextBox from '../Form/SingleTextBox';
import Result from '../Result';

import BtnOpt from '../BtnOpt';
import Dropdown from '../Dropdown';

import DropdownContext from '../../../../Store/Context/dropdown'
import FormBuilderContext from '../../../../Store/Context/formBuilder'

import './style.scss';


const ContentSurveyForm = () => {
    const TYPE = {
        OK: 'OK',
        PLUS: 'PLUS'
    }

    const [dropdown, setDropdown] = useState(false)
    const [question, setElem] = useState([])
    const [typeQuestion, setTypeQuestion] = useState(TYPE_QUESTION.SHORT)

    const typeHandler = (val) => {
        setTypeQuestion(val)
    }

    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }

    const questionHandler = (val) => {
        setElem([
            ...question,
            ...val,
        ])
    }

    let renderQuestion = [];
    question.forEach((item, index) => {
        if (item.type === TYPE_QUESTION.SHORT) {
            renderQuestion.push((<Result key={item.id} index={index + 1} title={item.title} desc={item.desc} />))
        }

        if (item.type === TYPE_QUESTION.MULTIPLE) {
            renderQuestion.push((
                <Result key={item.id} index={index + 1} title={item.title} desc={item.desc}>
                    <div className="multichoice">
                        <FormBuilderContext.Provider value={{ question, questionHandler }}>
                            {<MultiChoice index={index} id={item.id} key={item.id} />}
                        </FormBuilderContext.Provider>
                        {/* {item.choices.length > 0 ? <h3>exist</h3> : <h3>not exists</h3>} */}
                    </div>
                </Result>
            ))
        }
    })

    return (
        <div className="content-survey-form">
            <div className="btn-wrapper">
                <div className="btn-handler">
                    <div onClick={dropdownHandler} className="plus">
                        <BtnOpt type={TYPE.PLUS} />
                        <DropdownContext.Provider value={{ dropdown, dropdownHandler }}>
                            <FormBuilderContext.Provider value={{ typeQuestion, typeHandler }}>
                                {<Dropdown />}
                            </FormBuilderContext.Provider>
                        </DropdownContext.Provider>
                    </div>
                </div>
                <BtnOpt type={TYPE.OK} />
            </div>
            <div className="survey-wrapper">
                {/* <h3>what is your favorite band?</h3> */}
                <span className="desc">Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
                <div className="form-builder">
                    {renderQuestion}
                    <FormBuilderContext.Provider value={{ question, questionHandler }}>
                        {<SingleTextBox title={`q${question.length + 1}`} typeQuestion={typeQuestion} />}
                    </FormBuilderContext.Provider>
                </div>
            </div>

        </div>
    )
}

export default ContentSurveyForm;