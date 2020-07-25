import React from 'react';

import HeaderFormSurvey from '../Header'
import ContentFormSurvey from '../Content';

import './style.scss'

function MainSurveyForm() {
    return (
        <div className="main-survey">
            <HeaderFormSurvey />
            <ContentFormSurvey />
        </div>
    )
}

export default MainSurveyForm