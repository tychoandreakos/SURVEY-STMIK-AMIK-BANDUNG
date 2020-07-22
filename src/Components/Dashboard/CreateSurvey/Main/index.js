import React from 'react';

import Slider from '../Slider';
import './style.scss';

const MainCreateSurvey = () => {
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