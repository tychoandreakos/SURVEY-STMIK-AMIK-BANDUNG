import React from 'react';

import Slider from '../Slider';
import Button from '../Button';

import arrowLeft from '@iconify/icons-mdi/arrow-left'
import arrowRight from '@iconify/icons-mdi/arrow-right'

import './style.scss';

const MainCreateSurvey = () => {
    return (
        <div id="main-create">
            <div className="title">
                <h5 className="little-title">Create Survey</h5>
                <h1 className="main-title">Name Of Survey</h1>
            </div>
            <Slider />
            <div className="button-create">
                <Button type="left" icon={arrowLeft} />
                <Button type="right" icon={arrowRight} />
            </div>
            <div className="create">
                <Button type="another" />
            </div>
        </div>
    )
}

export default MainCreateSurvey;