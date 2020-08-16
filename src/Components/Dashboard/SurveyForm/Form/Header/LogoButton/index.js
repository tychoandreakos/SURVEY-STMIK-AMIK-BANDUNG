import React from 'react'
import Icon from '@iconify/react';

import DefaultIcon from '@iconify/icons-mdi/plus';

import './style.scss';

const LogoButton = (props) => {

    const { title = "Add a Logo", icon = DefaultIcon } = props;

    return (
        <button className="btn-add-header">
            <Icon className="icon-add-header" icon={icon} />
            <span>{title}</span>
        </button>
    )
}


export default LogoButton;