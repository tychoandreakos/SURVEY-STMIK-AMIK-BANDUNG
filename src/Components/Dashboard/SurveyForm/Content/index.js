import React, { useState, useEffect } from 'react';

import MultiChoice from '../Form/MultiChoice';
import BtnOpt from '../BtnOpt';
import Dropdown from '../Dropdown';

import './style.scss';


const ContentSurveyForm = () => {
    const TYPE = {
        OK: 'OK',
        PLUS: 'PLUS'
    }
    const [dropdown, setDropdown] = useState(false);

    const dropdownHandler = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className="content-survey-form">
            <div className="btn-wrapper">
                <div className="btn-handler">
                    <div onClick={dropdownHandler} className="plus">
                        <BtnOpt type={TYPE.PLUS} />
                        <Dropdown dropdownState={dropdown} />
                    </div>
                </div>
                <BtnOpt type={TYPE.OK} />
            </div>
            <div className="survey-wrapper">
                <h3>what is your favorite band?</h3>
                <span>Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
            </div>
            <div className="form-builder">
                <MultiChoice title="the 1975" selected={true} />
                <MultiChoice title="one direction" selected={false} />
                <MultiChoice title="paramore" selected={false} />
                <MultiChoice title="radiohead" selected={false} />
            </div>
        </div>
    )
}

export default ContentSurveyForm;