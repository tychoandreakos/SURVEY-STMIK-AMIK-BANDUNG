import React, { useReducer, useState, useRef, useEffect } from 'react';
import { DESCRIPTION_HEADER } from '../../../../../../util/varTypes';

import './style.scss';

const DescriptionHeader = () => {
    const [pageDesciption, editPageDescription] = ['page description', 'edit page description']
    const [pageTitle, setpageTitle] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!')
    const initialState = {
        edit: false,
        title: pageDesciption
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { edit, title } = state;


    const titleRef = useRef('');
    const [titleHeight, setTitleHeight] = useState('')
    useEffect(() => {
        if (titleRef.current !== null) {
            setTitleHeight(titleRef.current.clientHeight)
        }
    }, [edit, pageTitle])


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
            setTitleHeight(titleHeight + 35)
        }
    }


    let [classDescription, classDesc, classTitle] = [
        ['description-survey-header'],
        ['desc-survey-master'],
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
        classDesc = [
            ...classDesc,
            'edited-desc'
        ]
        btnEl = <button className="finish" onClick={saveHandler} >SAVE</button>;
        headerPageEl = <textarea onKeyPress={titleHandlerKeyPress} style={{ height: `${titleHeight}px` }} type="text" onChange={titleHandler} value={pageTitle} className="page-title-input" placeholder="Please insert your page title" />

    } else {
        btnEl = <button className="edit" onClick={editHandler} >EDIT</button>
        headerPageEl = <h3 ref={titleRef}>{pageTitle}</h3>
    }

    const pollClass = [classDescription, classDesc, classTitle];
    const [descriptionSurveyClass, descClass, titleClass] = pollClass.map(item => [item.join(' ')])


    return (
        <div className={descriptionSurveyClass}>
            <div className="top">
                <span className={titleClass}>{title}</span>
                <div className="handling">
                    {btnEl}
                </div>
            </div>
            {headerPageEl}
            <span className={descClass}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia accusamus adipisci, magni officiis dolore!</span>
        </div>
    )
}

export default DescriptionHeader;