import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import MultiChoiceAnwered from '../Form/AnsweredForm/MultiChoice';
import QuestionAnswerdForm from '../Form/QuestionAnsweredForm';
import FormBuilderContext from '../../../../Store/Context/formBuilder';
import { deleteSurveyForm, copiedSurveyForm } from '../../../../Store/redux/action';

import { TYPE_QUESTION, RESULT_ACTION } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type, data, _id, onDeleteHandler, onCopiedHandler } = props;
    const [showBtn, setShowBtn] = useState(false)
    const [action, setAction] = useState(false);
    const [resultData, setResultData] = useState({});

    /**
     * Setiap component berhasil dirender maka data 
     * didalam state resultData akan diset. 
     */
    useEffect(() => {
        setResultData({
            index,
            _id,
            title,
            desc,
            type,
            data,
        })
    }, [index, _id, title, desc, type, data])

    /**
     * Jika action state adalah atau sama dengan
     * RESULT_ACTION.COPY maka data dari result akan
     * disimpan didalam redux
     */
    useEffect(() => {
        if (action === RESULT_ACTION.COPY) {
            onCopiedHandler([{
                _id,
                title,
                desc,
                type,
                data,
            }]);
            setAction(false)
        }
    }, [action])

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

    /**
     * Ketika user menekan tombol simpan didalam componennAnsweredComponent
     * maka fungsi ini akan diinvoke
     */
    const actionHandler = () => {
        setAction(false)
    }

    const deleteHandler = () => {
        onDeleteHandler({
            _id,
            type,
        })
    }


    let btnEl;
    if (showBtn) {
        btnEl = (
            <div className="button-handler-form">
                <button onClick={() => setAction(RESULT_ACTION.EDIT)} className="btn btn-edit">edit</button>
                <button onClick={() => setAction(RESULT_ACTION.COPY)} className="btn">copy</button>
                <button onClick={deleteHandler} className="btn btn-delete">delete</button>
            </div>
        )
    }

    /**
     * Melakukan initialize state, ketika user menekan tombol edit otomatis
     * elemen QuestionAnswerdForm akan ditampilkan sebaliknya.
     * Jika user tidak melakukan aksi apapun, hanya elemen result saja yang
     * ditampilkan.
     */
    let resultEl;
    if (action === RESULT_ACTION.EDIT) {
        resultEl = (
            <FormBuilderContext.Provider value={{ action, actionHandler, resultData }}>
                <QuestionAnswerdForm />
            </FormBuilderContext.Provider>
        )
    } else {
        resultEl = (
            <div onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)} className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                {renderingForm}
                {btnEl}
            </div>
        )

    }

    return (
        <>
            {resultEl}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteHandler: (id) => dispatch(deleteSurveyForm(id)),
        onCopiedHandler: (item) => dispatch(copiedSurveyForm(item))
    }
}

const ResultSurveyJoinRedux = connect(null, mapDispatchToProps)(ResultSurvey);


export default ResultSurveyJoinRedux;