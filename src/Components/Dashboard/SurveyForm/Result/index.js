import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import MultiChoiceAnwered from '../Form/AnsweredForm/MultiChoice';
import QuestionAnswerdForm from '../Form/QuestionAnsweredForm';
import FormBuilderContext from '../../../../Store/Context/formBuilder';
import { deleteSurveyForm } from '../../../../Store/redux/action';

import { TYPE_QUESTION } from '../../../../util/varTypes'

import './style.scss';

const ResultSurvey = (props) => {

    const { index, title, desc, type, data, _id, onDeleteHandler } = props;
    const [showBtn, setShowBtn] = useState(false)
    const [edited, setEdited] = useState(false);
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
            data
        })
    }, [index, _id, title, desc, type, data])

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
    const editedHandler = () => {
        setEdited(false)
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
                <button onClick={() => setEdited(true)} className="btn btn-edit">edit</button>
                <button className="btn">copy</button>
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
    if (!edited) {
        resultEl = (
            <div onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)} className="result-survey">
                <span className="title">{`${index}. ${title}`}</span>
                <span className="descr">{desc}</span>
                {renderingForm}
                {btnEl}
            </div>
        )
    } else {
        resultEl = (
            <FormBuilderContext.Provider value={{ edited, editedHandler, resultData }}>
                <QuestionAnswerdForm />
            </FormBuilderContext.Provider>
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
        onDeleteHandler: (id) => dispatch(deleteSurveyForm(id))
    }
}

const ResultSurveyJoinRedux = connect(null, mapDispatchToProps)(ResultSurvey);


export default ResultSurveyJoinRedux;