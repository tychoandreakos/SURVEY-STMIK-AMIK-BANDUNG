import React, { useReducer, useState } from 'react';
import { DESCRIPTION_HEADER } from '../../../../../../util/varTypes';
import Textarea from 'react-expanding-textarea';

import './style.scss';

const DescriptionHeader = () => {
    const [pageDesciption, editPageDescription] = ['page description', 'edit page description']
    const [pageTitle, setpageTitle] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!')
    const [pageDesc, setPageDesc] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia accusamus adipisci, magni officiis dolore!')
    const initialState = {
        edit: false,
        title: pageDesciption
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { edit, title } = state;

    function reducer(state, action) {
        switch (action.type) {
            case DESCRIPTION_HEADER.EDIT:
                return {
                    edit: true,
                    title: editPageDescription
                };
            case DESCRIPTION_HEADER.SAVE:
                return {
                    edit: false,
                    title: pageDesciption
                }
            default:
                return state;
        }
    }

    const saveHandler = () => {
        dispatch({
            type: DESCRIPTION_HEADER.SAVE
        })
    }
    const editHandler = () => {
        dispatch({
            type: DESCRIPTION_HEADER.EDIT
        })
    }

    const titleHandler = (e) => {
        setpageTitle(e.target.value)
    }

    const titleHandlerKeyPress = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            dispatch({
                type: DESCRIPTION_HEADER.SAVE
            })
        }
    }

    const descHandler = (e) => {
        setPageDesc(e.target.value)
    }

    const descHandlerKeyPress = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            dispatch({
                type: DESCRIPTION_HEADER.SAVE
            })
        }
    }


    let [classDescription, classTitle] = [
        ['description-survey-header'],
        ['title-survey-master']
    ];
    let btnEl;
    let headerPageEl;
    if (edit) {
        classDescription = [
            ...classDescription,
            'edited'
        ]
        classTitle = [
            ...classTitle,
            'edited-title'
        ]
        btnEl = <button className="finish" onClick={saveHandler} >SAVE</button>;
        headerPageEl = (
            <>
                <Textarea
                    onKeyPress={titleHandlerKeyPress}
                    type="text" onChange={titleHandler}
                    value={pageTitle}
                    className="page-title-input"
                    placeholder="Please insert your page title"
                />
                <Textarea
                    className="desc-survey-master edited-desc"
                    onKeyPress={descHandlerKeyPress}
                    type="text" onChange={descHandler}
                    value={pageDesc}
                    placeholder="Please insert your page description"
                />
            </>
        )
    } else {
        btnEl = <button className="edit" onClick={editHandler} >EDIT</button>
        headerPageEl = (
            <>
                <h3>{pageTitle}</h3>
                <span className="desc-survey-master">{pageDesc}</span>
            </>
        )
    }

    const pollClass = [classDescription, classTitle];
    const [descriptionSurveyClass, titleClass] = pollClass.map(item => [item.join(' ')])


    return (
        <div className={descriptionSurveyClass}>
            <div className="top">
                <span className={titleClass}>{title}</span>
                <div className="handling">
                    {btnEl}
                </div>
            </div>
            {headerPageEl}
        </div>
    )
}

export default DescriptionHeader;