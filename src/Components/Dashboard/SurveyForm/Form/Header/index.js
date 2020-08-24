import React from 'react';

import LogoButton from './LogoButton';
import Description from './Description';

import './style.scss';

const HeaderForm = () => {
    return (
        <div className="header-form-survey">
            <LogoButton />
            <Description />
        </div>
    )
}

export default HeaderForm;