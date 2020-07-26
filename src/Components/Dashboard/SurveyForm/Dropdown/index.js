import React, { useContext } from 'react'

import DropdownContext from '../../../../Store/Context/dropdown'
import FormBuilderContext from '../../../../Store/Context/formBuilder';

import Icon from '@iconify/react';
import ShortText from '@iconify/icons-mdi/text-short'
import LongText from '@iconify/icons-mdi/format-align-justify'
import MultipleChoice from '@iconify/icons-mdi/radio-button-checked'
import Checkbox from '@iconify/icons-mdi/checkbox-marked'

import ArrowDown from '@iconify/icons-mdi/chevron-down'

import './style.scss';

const DropdownForm = () => {

    const TYPEQUESTION = {
        SHORT: 'SHORT',
        LONG: 'LONG',
        MULTIPLE: 'MULTIPLE',
        CHECKBOX: 'CHECKBOX'
    }

    const stateDropdown = [
        {
            icon: ShortText,
            title: 'short text',
            type: TYPEQUESTION.SHORT
        },
        {
            icon: LongText,
            title: 'long text',
            type: TYPEQUESTION.LONG
        },
        {
            icon: MultipleChoice,
            title: 'multiple choice',
            type: TYPEQUESTION.MULTIPLE
        },
        {
            icon: Checkbox,
            title: 'checkbox',
            type: TYPEQUESTION.CHECKBOX
        }
    ]


    // initialize of useContext
    const { dropdown, dropdownHandler } = useContext(DropdownContext)
    const { typeHandler } = useContext(FormBuilderContext)
    let backdrop;

    const dropdownForm = ['dropdown-form']
    if (dropdown) {
        dropdownForm.push('active-dropdown')
        backdrop = (
            <div onClick={dropdownHandler} className="backdrop-dropdown"></div>
        )
    }
    else {
        dropdownForm.push('not-active-dropdown')
        backdrop = undefined
    }

    const liElem = stateDropdown.map((item, index) => (
        <li onClick={() => typeHandler(item.type)} key={index}>
            <div className="icon">
                <Icon icon={item.icon} />
            </div>
            <span  >{item.title}</span>
        </li>
    ))


    const dropdownFormEl = dropdownForm.join(' ')

    return (
        <div className={dropdownFormEl}>
            <div className="dropdown-wrapper">
                <h3 >Choose Question Format</h3>
                <ul>
                    {liElem}
                </ul>
                <div className="chev">
                    <Icon icon={ArrowDown} />
                </div>
            </div>
            {backdrop}
        </div>
    )
}

export default DropdownForm