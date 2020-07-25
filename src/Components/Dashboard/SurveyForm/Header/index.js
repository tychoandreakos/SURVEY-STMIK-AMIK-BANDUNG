import React from 'react';

import UserAcccount from '../../UserAccount';
import BreadcrumbHeader from '../Breadcrumbs';

import './style.scss';

const SurveyHeaderForm = () => {
    return (
        <div className="header-survey-form">
            <div className="top-header">
                <BreadcrumbHeader />
                <UserAcccount />
            </div>
            <div className="bottom-header">
                <div className="back-btn"></div>
                <div className="title"></div>
                <div className="btn-result"></div>
            </div>
        </div >
    )
}

export default SurveyHeaderForm