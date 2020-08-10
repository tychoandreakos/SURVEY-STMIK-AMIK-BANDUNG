import React from 'react';

import Icon from '@iconify/react'

import './style.scss';

const ButtonCreate = ({ type, icon, clicked, status }) => {
    const TYPE = {
        LEFT: 'left',
        RIGHT: 'right',
        ANOTHER: 'another'
    }

    let btn;
    if (type === TYPE.LEFT) {
        const cls = ['btn-left'];
        if (status) cls.push('btn-previous-active')
        const joinCls = cls.join(' ')
        btn = (
            <button onClick={clicked} className={joinCls}>
                <div className="icon-btn">
                    <Icon icon={icon} />
                </div>
                <span>previous</span>
            </button>
        )
    }

    if (type === TYPE.RIGHT) {
        btn = (
            <button onClick={clicked} className="btn-right">
                <span>next</span>
                <div className="icon-btn">
                    <Icon icon={icon} />
                </div>
            </button>
        )
    }

    if (type === TYPE.ANOTHER) {
        const cls = ['btn-create-survey'];
        if (status) cls.push('btn-create-active')
        const joinCls = cls.join(' ')
        btn = (
            <button onClick={clicked} className={joinCls}>
                <span>Create Survey!</span>
            </button>
        )
    }

    return (
        <>
            {btn}
        </>
    )
}

export default ButtonCreate;