import React from 'react';
import PropTypes from 'prop-types';

const ButtonInNewQuestionFirst = (props) => {
    const defaultButtonTitle = "Default!"
    const { title = defaultButtonTitle } = props;
    return (
        <button>{title}</button>
    )
}

ButtonInNewQuestionFirst.propTypes = {
    title: PropTypes.string,
}

export default ButtonInNewQuestionFirst;