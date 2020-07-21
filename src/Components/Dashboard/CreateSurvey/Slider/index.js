import React from 'react';

import SlidersCreate from './Sliders';

import 'style.scss';

const SliderCreate = () => {
    const slider = 3;
    const slidersComponent = [];
    for (let i = 0; i < slider; i++) {
        slidersComponent.push(<SlidersCreate key={i} />)
    }


    return (
        <div className="slider">
            <h3>category</h3>
            {slidersComponent}
        </div>
    )
}

export default SliderCreate;