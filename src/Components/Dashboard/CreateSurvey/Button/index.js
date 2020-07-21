import React from 'react';

import Icon from '@iconify/react'

import './style.scss';

const ButtonCreate = ({ type, icon }) => {
    const TYPE = {
        LEFT: 'left',
        RIGHT: 'right',
        ANOTHER: 'another'
    }

    let btn;
    if (type == TYPE.LEFT) {
        btn = (
            <div className="btn-left">
                <div className="icon-btn">
                    <Icon icon={icon} />
                </div>
                <span>previous</span>
            </div>
        )
    }

    if (type == TYPE.RIGHT) {
        btn = (
            <div className="btn-right">
                <span>next</span>
                <div className="icon-btn">
                    <Icon icon={icon} />
                </div>
            </div>
        )
    }

    if (type == TYPE.ANOTHER) {
        btn = (
            <div className="btn-another">
                <span>Create Survey!</span>
            </div>
        )
    }

    return (
        <>
            {btn}
        </>
    )
}

export default ButtonCreate;