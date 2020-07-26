import React, { useState } from 'react';

// formBUilder
import MultiChoice from '../Form/MultiChoice';
import SingleTextBox from '../Form/SingleTextBox';
import Result from '../Result';

import BtnOpt from '../BtnOpt';
import Dropdown from '../Dropdown';

import DropdownContext from '../../../../Store/Context/dropdown'

import './style.scss';


const ContentSurveyForm = () => {
    const TYPE = {
        OK: 'OK',
        PLUS: 'PLUS'
    }

    const [dropdown, setDropdown] = useState(false)

    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }


    const question = [
        {
            title: "Who kill you?",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse a omnis expedita non. Ad, dicta!"
        }
        ,
        {
            title: "How long is your penis?",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit!"
        },
        {
            title: "Can you suck me?",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse a omnis expedita non. Ad, dicta!"
        }
    ]

    return (
        <div className="content-survey-form">
            <div className="btn-wrapper">
                <div className="btn-handler">
                    <div onClick={dropdownHandler} className="plus">
                        <BtnOpt type={TYPE.PLUS} />
                        <DropdownContext.Provider value={{ dropdown, dropdownHandler }}>
                            {<Dropdown />}
                        </DropdownContext.Provider>
                    </div>
                </div>
                <BtnOpt type={TYPE.OK} />
            </div>
            <div className="survey-wrapper">
                <h3>what is your favorite band?</h3>
                <span className="desc">Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
                <div className="form-builder">
                    <MultiChoice title="the 1975" selected={true} />
                    <MultiChoice title="one direction" selected={false} />
                    <MultiChoice title="paramore" selected={false} />
                    <MultiChoice title="radiohead" selected={false} />
                    {question.map((item, index) => <Result key={index} index={index + 1} title={item.title} desc={item.desc} />)}
                    {[1].map((_, index) => <SingleTextBox key="index" title={`q${index + 1}`} />)}
                </div>
            </div>

        </div>
    )
}

export default ContentSurveyForm;