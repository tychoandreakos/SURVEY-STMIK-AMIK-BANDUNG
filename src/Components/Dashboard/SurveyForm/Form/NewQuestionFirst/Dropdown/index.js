import React, { useContext } from 'react';

import Icon from '@iconify/react'
import DefaultIcon from '@iconify/icons-mdi/text-short';
import ChevronDown from '@iconify/icons-mdi/chevron-down'
import DropdownContext from '../../../../../../Store/Context/dropdownAlternate'

import './style.scss';

const DropdownNewQuestionFirst = (props) => {
    const { title = "Default Menu", iconDefault = DefaultIcon } = props;


    const { elementDropdown, dropdown } = useContext(DropdownContext);
    let dropdownEl = elementDropdown.map(item => {
        return (
            <div key={item._id} className="title-dropdown">
                <Icon className="icon-dropdown" icon={item.icon ? item.icon : iconDefault} />
                <span>{item.title}</span>
            </div>
        )
    })

    let styleDrop;
    if (dropdown) {
        const height = 315.2;
        styleDrop = {
            height: `${height}px`
        }
        setTimeout(() => {
            window.scrollTo({
                top: window.screenY + height,
                behavior: 'smooth'
            })
        }, 650)
    } else {
        styleDrop = {
            height: '0px',
        }
    }

    return (
        <div style={styleDrop} className="dropdown-question-first" >
            <div className="dropdown-title-wrapper">
                {dropdownEl}
            </div>
            <div className="scroll-dropdown">
                <Icon icon={ChevronDown} />
            </div>
        </div >
    )
}

export default DropdownNewQuestionFirst;