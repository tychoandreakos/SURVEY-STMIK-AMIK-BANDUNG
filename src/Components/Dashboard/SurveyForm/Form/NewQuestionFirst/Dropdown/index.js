import React, { useContext } from 'react';

import Icon from '@iconify/react'
import DefaultIcon from '@iconify/icons-mdi/text-short';
import ChevronDown from '@iconify/icons-mdi/chevron-down'
import DropdownContext from '../../../../../../Store/Context/dropdownAlternate'
import FormBuilderContext from '../../../../../../Store/Context/formBuilder'

import './style.scss';

const DropdownNewQuestionFirst = () => {
    const { elementDropdown, dropdown } = useContext(DropdownContext);
    const defaultData = {
        title: "Default Menu",
        iconDefault: DefaultIcon
    }

    const { typeHandler } = useContext(FormBuilderContext)

    const dropdownTypeHandler = (type) => {
        typeHandler(type)
    }

    let dropdownEl = elementDropdown.map(item => {
        return (
            <div key={item._id} onClick={() => dropdownTypeHandler(item.type)} className="title-dropdown">
                <Icon className="icon-dropdown" icon={item.icon ? item.icon : defaultData.iconDefault} />
                <span>{item.title ? item.title : defaultData.title}</span>
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