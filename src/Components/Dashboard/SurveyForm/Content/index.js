import React, { useState } from 'react';

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

    const TYPEQUESTION = {
        SHORT: 'SHORT',
        LONG: 'LONG',
        MULTIPLE: 'MULTIPLE',
        CHECKBOX: 'CHECKBOX'
    }

    const [dropdown, setDropdown] = useState(false)
    const [question, setElem] = useState([])
    const [typeQuestion, setTypeQuestion] = useState(TYPEQUESTION.SHORT)

    const typeHandler = (val) => {
        setTypeQuestion(val)
    }

    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }


    const sampleMulti = [
        {
            title: "the 1975",
            selected: true,
        },
        {
            title: "one direction",
            selected: false,
        },
        {
            title: "paramore",
            selected: false,
        },
        {
            title: "radiohead",
            selected: false,
        }
    ]

    const questionHandler = (val) => {
        setElem([
            ...question,
            {
                title: val,
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse a omnis expedita non. Ad, dicta!"
            }
        ])
    }

    let renderQuestion = [];
    if (typeQuestion == TYPEQUESTION.SHORT) {
        renderQuestion = [
            ...renderQuestion,
            question.map((item, index) => <Result key={index} index={index + 1} title={item.title} desc={item.desc} />)
        ]
    }


    if (typeQuestion == TYPEQUESTION.MULTIPLE) {
        renderQuestion = [
            ...renderQuestion,
            question.map((item, index) => <Result key={index} index={index + 1} title={item.title} desc={item.desc} />),
            sampleMulti.map((item, key) => <MultiChoice key={key} title={item.title} selected={item.selected} />)
        ]
    }

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
                <h3>what is your favorite band?</h3>
                <span className="desc">Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
                <div className="form-builder">
                    {renderQuestion}
                    <FormBuilderContext.Provider value={{ question, questionHandler }}>
                        {<SingleTextBox title={`q${question.length + 1}`} />}
                    </FormBuilderContext.Provider>
                </div>
            </div>

        </div>
    )
}

export default ContentSurveyForm;