import React, { useState, useContext } from 'react';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import './style.scss';

const QuestionAnsweredForm = (props) => {
    const [dropdown, setDropdown] = useState(false);

    const { numbered } = props;

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion } = useContext(FormBuilderContext);

    const titleDropdown = elementDropdown.find(item => item.type === typeQuestion)

    const dropdonHandler = () => {
        setDropdown(!dropdown);
    }

    const placeholder = "Please type a question ..."
    return (
        <div className="question-answered-form">
            <div className="input-answered-form">
                <div className="numbered">{numbered}</div>
                <div className="input">
                    <TextArea placeholder={placeholder} />
                </div>
                <div onClick={dropdonHandler} className="dropdown-choice">
                    <span className="title-dropdown">{titleDropdown.title}</span>
                    <div className="icon">
                        <Icon icon={ChevronDown} />
                    </div>
                    {dropdown ? <DropdownQuestion /> : undefined}
                </div>
                <div className="help"></div>
            </div>
        </div>
    )
}

export default QuestionAnsweredForm;