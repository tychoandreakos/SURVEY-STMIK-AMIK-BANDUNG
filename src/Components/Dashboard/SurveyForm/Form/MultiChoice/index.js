import React, { useState, useContext, useEffect } from 'react';

import { v4 as uuid } from 'uuid';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import './style.scss'

const MultiChoice = ({ selected = false, _id, title }) => {
    const [choice, setChoice] = useState("");
    const { question, multiChoiceHandler } = useContext(FormBuilderContext);
    const [newQuestion, setNewQuestion] = useState([]);

    useEffect(() => {
        if (newQuestion.length > 0) multiChoiceHandler(newQuestion)
    }, [newQuestion])

    const choiceHandler = ({ keyCode }) => {

        if (keyCode === 13) {
            const mapQuestion = question.map(item => {
                if (item._id === _id) {
                    item.choices.push({
                        _id: uuid(),
                        title: choice,
                        selected: false,
                    })
                };
                return item
            })
            setNewQuestion(mapQuestion)
            setChoice('')
        }
    }

    const multichoice = ['multichoice']
    let circleElem;
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

    let multiChoiceEl;
    if (title) {
        multiChoiceEl = (
            <span className="dropdown-title">{title}</span>
        )
    } else {
        multiChoiceEl = (
            <input onKeyDown={choiceHandler} value={choice} onChange={e => setChoice(e.target.value)} className="choice-input" placeholder="Write the multichoice question here ..." />
        )
        multichoice.push('as-input')
    }


    const multichoiceClass = multichoice.join(' ');

    return (
        <div className={multichoiceClass}>
            {circleElem}
            {multiChoiceEl}
        </div>
    )
}

export default MultiChoice;