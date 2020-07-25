import React from 'react';

import Icon from '@iconify/react'
import Plus from '@iconify/icons-mdi/plus'
import OK from '@iconify/icons-mdi/check'

import './style.scss'

const BtnOpt = ({ type }) => {
    const TYPE = {
        OK: 'OK',
        PLUS: 'PLUS'
    }

    let btn;


    if (type == TYPE.OK) {
        btn = (
            <div className="btn-ok">
                <Icon icon={OK} />
            </div>
        )
    }

    if (type == TYPE.PLUS) {
        btn = (
            <div className="btn-opt">
                <Icon icon={Plus} />
            </div>
        )
    }

    return (
        <>
            {btn}
        </>
    )
}

export default BtnOpt;