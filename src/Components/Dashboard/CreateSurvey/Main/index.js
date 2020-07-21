import React from 'react';

import './style.scss';

import Slider from '../Slider';

const MainCreateSurvey = props => {
    return (
        <div id="main-create">
            <div className="title">
                <h5 className="little-title">Create Survey</h5>
                <h1 className="main-title">Name Of Survey</h1>
            </div>
            <Slider />
        </div>
    )
}

export default MainCreateSurvey;