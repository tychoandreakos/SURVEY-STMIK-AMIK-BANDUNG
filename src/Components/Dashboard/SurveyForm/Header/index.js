import React, { useState } from 'react';

import Icon from '@iconify/react'
import ArrowLeft from '@iconify/icons-mdi/chevron-left'
import Eye from '@iconify/icons-mdi/eye';

import UserAcccount from '../../UserAccount';
import BreadcrumbHeader from '../Breadcrumbs';
import Input from '../../../Util/InputSimple';

import FormBuilderContext from '../../../../Store/Context/formBuilder'

import './style.scss';

const SurveyHeaderForm = () => {
    const [headTitle, setHeadTitle] = useState("")
    const placeholderText = "Survey Title"
    const headTitleHandler = (val) => {
        setHeadTitle(val)
    }
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
                <h2 className="title">
                    <FormBuilderContext.Provider value={{
                        headTitle,
                        headTitleHandler
                    }}>
                        <Input placeholder={placeholderText} />
                    </FormBuilderContext.Provider>
                </h2>
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