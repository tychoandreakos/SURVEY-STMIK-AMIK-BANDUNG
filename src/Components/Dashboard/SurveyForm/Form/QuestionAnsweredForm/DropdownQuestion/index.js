import React, { useContext } from 'react';

import Icon from '@iconify/react';
import Check from '@iconify/icons-mdi/check';

import DropdownContext from '../../../../../../Store/Context/dropdownAlternate'

import './style.scss';

const DropdownQuestion = () => {

    const { elementDropdown } = useContext(DropdownContext);

    const elDropdown = elementDropdown.map(item => (
        <li key={item._id}>
            <div className="dropdown-wrapper">
                <div className="icon-dropdown">
                    <Icon icon={item.icon} />
                </div>
                <span>{item.title}</span>
            </div>
            <div className="icon-dropdown">
                <Icon icon={Check} />
            </div>
        </li>
    ))

    return (
        <ul className="dropdown-question">
            {elDropdown}
        </ul>
    )
}

export default DropdownQuestion;