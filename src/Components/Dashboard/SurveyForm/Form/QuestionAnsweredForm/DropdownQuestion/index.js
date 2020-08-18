import React, { useContext } from 'react';

import Icon from '@iconify/react';
import Check from '@iconify/icons-mdi/check';

import DropdownContext from '../../../../../../Store/Context/dropdownAlternate';
import FormBuilder from '../../../../../../Store/Context/formBuilder';

import './style.scss';

const DropdownQuestion = () => {

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion } = useContext(FormBuilder);

    console.log(typeQuestion)

    const checkedEl = (
        <div className="icon-dropdown">
            <Icon icon={Check} />
        </div>
    )

    const elDropdown = elementDropdown.map(item => (
        <li key={item._id}>
            <div className="dropdown-wrapper">
                <div className="icon-dropdown">
                    <Icon icon={item.icon} />
                </div>
                <span>{item.title}</span>
            </div>
            {item.type === typeQuestion ? checkedEl : undefined}

        </li>
    ))

    return (
        <ul className="dropdown-question">
            {elDropdown}
        </ul>
    )
}

export default DropdownQuestion;