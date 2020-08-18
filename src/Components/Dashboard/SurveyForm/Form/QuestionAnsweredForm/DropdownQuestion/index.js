import React, { useContext, useRef, useEffect, useState } from 'react';

import Icon from '@iconify/react';
import Check from '@iconify/icons-mdi/check';

import DropdownContext from '../../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../../Store/Context/formBuilder';

import './style.scss';

const DropdownQuestion = () => {

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion, typeHandler } = useContext(FormBuilderContext);
    const dropdownRef = useRef();
    const [backdrop, setBackdrop] = useState(true)

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

    const dropdownHandler = (type) => {
        typeHandler(type)
    }

    const renderElementToReact = (item) => (
        <li onClick={() => dropdownHandler(item.type)} key={item._id}>
            <div className="dropdown-wrapper">
                <div className="icon-dropdown">
                    <Icon icon={item.icon} />
                </div>
                <span>{item.title}</span>
            </div>
            {item.type === typeQuestion ? checkedEl : undefined}
        </li>
    )

    const backdropHandler = () => {
        setBackdrop(false)
    }



    const newElementDropdown = Array.from(elementDropdown);
    const elDropdown = newElementDropdown.sort(sortByChecked).map(renderElementToReact)

    let backdropEl;
    if (backdrop) {
        backdropEl = <div onClick={backdropHandler} className="backdrop-dropdown-question"></div>
    }

    return (
        <>
            <ul ref={dropdownRef} className="dropdown-question">
                {elDropdown}
            </ul>
            {backdropEl}
        </>
    )
}

export default DropdownQuestion;