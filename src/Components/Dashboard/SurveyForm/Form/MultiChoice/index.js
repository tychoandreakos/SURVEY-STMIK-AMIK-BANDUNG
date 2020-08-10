import React, { useState, useContext } from 'react';

import { v4 as uuid } from 'uuid';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import './style.scss'

const MultiChoice = ({ selected = false, title = "hahha", id, index }) => {
    const [choice, setChoice] = useState("");
    const { question, questionHandler } = useContext(FormBuilderContext);

    let circleElem;
    const multichoice = ['multichoice']
    if (selected) {
        circleElem = (
            <div className="icon">
                <div className="icon-circle">
                </div>
            </div>
        )
        multichoice.push('selected')
    } else {
        multichoice.push('not-selected')
    }

    const multichoiceClass = multichoice.join(' ');

    const choiceHandler = ({ keyCode }) => {

        if (keyCode === 13) {
            const quest = question.find(item => item.id === id)
            const updateQuestion = [
                { ...quest }
            ]
            updateQuestion[0].choices = [
                ...updateQuestion[0].choices,
                {
                    [uuid()]: {
                        title: choice,
                        active: false,
                    }
                }
            ]
            console.log("this is from multichoce", [
                ...question,
                ...updateQuestion
            ])
            // questionHandler([
            //     ...question,
            //     {
            //         ...updateQuestion
            //     }
            // ]);
        }
    }

    return (
        <div className={multichoiceClass}>
            {circleElem}
            {/* <span>{title}</span> */}
            <input onKeyDown={choiceHandler} onChange={e => setChoice(e.target.value)} className="choice-input" placeholder="Write here" />
        </div>
    )
}

export default MultiChoice;