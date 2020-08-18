import React, { useContext, useRef, useEffect } from 'react';

import Icon from '@iconify/react';
import Check from '@iconify/icons-mdi/check';

import DropdownContext from '../../../../../../Store/Context/dropdownAlternate';
import FormBuilder from '../../../../../../Store/Context/formBuilder';

import './style.scss';

const DropdownQuestion = () => {

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion } = useContext(FormBuilder);
    const dropdownRef = useRef();
    
    useEffect(() => {
        dropdownRef.current.scrollTo({
            top: 0,
        })
    }, []);

    const checkedEl = (
        <div className="icon-dropdown">
            <Icon icon={Check} />
        </div>
    )

    const sortByChecked = (item) => {
        return item.type === typeQuestion ? -1 : 1;
    }


    const renderElementToReact = (item) => (
        <li key={item._id}>
            <div className="dropdown-wrapper">
                <div className="icon-dropdown">
                    <Icon icon={item.icon} />
                </div>
                <span>{item.title}</span>
            </div>
            {item.type === typeQuestion ? checkedEl : undefined}
        </li>
    )

    const newElementDropdown = Array.from(elementDropdown);
    const elDropdown = newElementDropdown.sort(sortByChecked).map(renderElementToReact)

    return (
        <ul ref={dropdownRef} className="dropdown-question">
            {elDropdown}
        </ul>
    )
}

export default DropdownQuestion;