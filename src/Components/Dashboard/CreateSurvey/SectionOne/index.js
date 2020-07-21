import React from 'react';

import Header from '../../Header'
import MainCreate from '../Main'

import './style.scss';

function CreateSurveyOne() {
    return (
        <div id="create-one">
            <Header />
            <div className="main-center">
                <MainCreate />
            </div>
        </div>
    )
}

export default CreateSurveyOne;