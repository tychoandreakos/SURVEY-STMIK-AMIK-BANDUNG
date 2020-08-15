import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@iconify/react'

import DefaultIcon from '@iconify/icons-mdi/plus'

import './style.scss'

const ButtonInNewQuestionFirst = (props) => {
    const defaultButtonTitle = "Default!"
    const {
        title = defaultButtonTitle,
        icon = DefaultIcon
    } = props;
    return (
        <button className="new-question-btn">
            <Icon className="icon-new-question" icon={icon} />
            <span>{title}</span>
        </button>
    )
}

ButtonInNewQuestionFirst.propTypes = {
    title: PropTypes.string,
}

export default ButtonInNewQuestionFirst;