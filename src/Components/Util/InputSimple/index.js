import React, { useContext } from 'react';
import FormBuilderContext from '../../../Store/Context/formBuilder'

import './style.scss'

const InputSimple = ({ placeholder }) => {
    const { headTitle, headTitleHandler } = useContext(FormBuilderContext)

    const inputHandler = (e) => {
        headTitleHandler(e.target.value)
    }

    return (
        <input value={headTitle} onChange={e => inputHandler(e)} placeholder={placeholder} className="input-form" type="text" />
    )
}

export default InputSimple