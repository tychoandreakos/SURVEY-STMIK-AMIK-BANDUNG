import React, { useEffect } from 'react';

import HeaderFormSurvey from '../Header'
import ContentFormSurvey from '../Content';

import './style.scss'

function MainSurveyForm() {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="main-survey">
            <HeaderFormSurvey />
            <ContentFormSurvey />
        </div>
    )
}

export default MainSurveyForm