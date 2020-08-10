import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SURVEY_TITLE } from '../../../../util/varTypes'
import { withRouter } from 'react-router-dom'

import Icon from '@iconify/react'
import ArrowLeft from '@iconify/icons-mdi/chevron-left'
import Eye from '@iconify/icons-mdi/eye';

import UserAcccount from '../../UserAccount';
import BreadcrumbHeader from '../Breadcrumbs';
import Input from '../../../Util/InputSimple';

import FormBuilderContext from '../../../../Store/Context/formBuilder'

import './style.scss';

const SurveyHeaderForm = (props) => {
    const [headTitle, setHeadTitle] = useState("")
    const { title, history } = props;
    useEffect(() => {
        if (title) setHeadTitle(title)
        else history.push('/create')
    }, [title])
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

const mapStateToProps = state => {
    return {
        title: state[SURVEY_TITLE]
    }
}

const SurveyHeaderFormWithRedux = connect(mapStateToProps)(withRouter(SurveyHeaderForm))

export default SurveyHeaderFormWithRedux