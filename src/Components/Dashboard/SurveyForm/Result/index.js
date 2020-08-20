import React, { useState } from 'react';

import MultiChoiceAnwered from '../Form/AnsweredForm/MultiChoice';

import { TYPE_QUESTION } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type, data } = props;
    const [showBtn, setShowBtn] = useState(false)

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

    let btnEl;
    if (showBtn) {
        btnEl = (
            <div className="button-handler-form">
                <button className="btn btn-edit">edit</button>
                <button className="btn">move</button>
                <button className="btn">copy</button>
                <button className="btn btn-delete">delete</button>
            </div>
        )
    }

    return (
        <>
            <div onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)} className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                {renderingForm}
                {btnEl}
            </div>

        </>
    )
}


export default ResultSurvey;