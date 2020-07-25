import React, { useEffect } from 'react'

import Icon from '@iconify/react';
import ShortText from '@iconify/icons-mdi/text-short'
import LongText from '@iconify/icons-mdi/format-align-justify'
import MultipleChoice from '@iconify/icons-mdi/radio-button-checked'
import Checkbox from '@iconify/icons-mdi/checkbox-marked'

import ArrowDown from '@iconify/icons-mdi/chevron-down'

import './style.scss';

const DropdownForm = ({ dropdownState }) => {
    const stateDropdown = [
        {
            icon: ShortText,
            title: 'short text'
        },
        {
            icon: LongText,
            title: 'long text'
        },
        {
            icon: MultipleChoice,
            title: 'multiple choice'
        },
        {
            icon: Checkbox,
            title: 'checkbox'
        }
    ]

    const dropdownForm = ['dropdown-form']
    if (dropdownState) dropdownForm.push('active')
    else dropdownForm.push('not-active')


    useEffect(() => {
        console.log(dropdownState)
    }, [dropdownState])

    const liElem = stateDropdown.map((item, index) => (
        <li key={index}>
            <div className="icon">
                <Icon icon={item.icon} />
            </div>
            <span>{item.title}</span>
        </li>
    ))

    const dropdownFormEl = dropdownForm.join(' ')

    return (
        <div className={dropdownFormEl}>
            <div className="dropdown-wrapper">
                <h3>Choose Question Format</h3>
                <ul>
                    {liElem}
                </ul>
                <div className="chev">
                    <Icon icon={ArrowDown} />
                </div>
            </div>
        </div>
    )
}

export default DropdownForm