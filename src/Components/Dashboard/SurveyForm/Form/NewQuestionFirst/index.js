import React, { useState, useContext } from 'react';

import Button from './Button';
import Dropdown from './Dropdown';
import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import './style.scss';

const NewQuestionFirst = (props) => {
    const [dropdown, setDropdown] = useState(false)

    const { formatHandler } = props;

    const { elementDropdown } = useContext(DropdownContext);

    const typeHandler = type => {
        formatHandler(type);
        dropdownHandler();
    }

    const dropdownHandler = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className="new-question-first">
            <Button clicked={dropdownHandler} title="new question" />
            <span className="desc">or <a href="/">Copy and paste questions</a></span>
            <DropdownContext.Provider value={{ elementDropdown, dropdown, setDropdown }}>
                <FormBuilderContext.Provider value={{ typeHandler }}  >
                    <Dropdown dropdownHandler={dropdownHandler} dropdownState={dropdown} />
                </FormBuilderContext.Provider>
            </DropdownContext.Provider>
        </div>
    )
}

export default NewQuestionFirst;