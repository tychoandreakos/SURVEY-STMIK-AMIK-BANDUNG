import React from 'react';

import Icon from '@iconify/react'
import Plus from '@iconify/icons-mdi/plus'

import './style.scss'

const BtnOpt = () => {
    return (
        <div className="btn-opt">
            <Icon icon={Plus} />
        </div>
    )
}

export default BtnOpt;