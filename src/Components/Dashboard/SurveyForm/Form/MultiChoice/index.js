import React from 'react';

import './style.scss'

const MultiChoice = ({ selected, title }) => {
    let circleElem;
    const multichoice = ['multichoice']
    if (selected) {
        circleElem = (
            <div className="icon">
                <div className="icon-circle">
                </div>
            </div>
        )
        multichoice.push('selected')
    } else {
        multichoice.push('not-selected')
    }

    const multichoiceClass = multichoice.join(' ');

    return (
        <div className={multichoiceClass}>
            {circleElem}
            <span>{title}</span>
        </div>
    )
}

export default MultiChoice;