import React from 'react';

import Icon from '@iconify/react'
import ArrowLeft from '@iconify/icons-mdi/chevron-left'
import Eye from '@iconify/icons-mdi/eye';

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
                <div className="back-btn">
                    <div className="icon">
                        <Icon icon={ArrowLeft} />
                    </div>
                    <span>form builder</span>
                </div>
                <h2 className="title">most love music bands</h2>
                <div className="btn-result">
                    <div className="icon">
                        <Icon icon={Eye} />
                    </div>
                    <span>View Result</span>
                </div>
            </div>
        </div >
    )
}

export default SurveyHeaderForm