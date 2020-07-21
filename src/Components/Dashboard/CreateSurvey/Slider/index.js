import React from 'react';

import SlidersCreate from './Sliders';

import clumsy from '@iconify/icons-mdi/fish';
import money from '@iconify/icons-mdi/dollar';
import love from '@iconify/icons-mdi/heart';

import './style.scss';

const SliderCreate = () => {
    const slider = [
        {
            icon: clumsy,
            title: 'fishy business',
            active: false,
        },
        {
            icon: money,
            title: 'money',
            active: true,
        },
        {
            icon: love,
            title: 'love',
            active: false,
        },
    ];
    const slidersComponent = [];

    slider.forEach((item, i) => {
        const itemToPush = <SlidersCreate key={i} icon={item.icon} title={item.title} active={item.active} />;

        slidersComponent.push(itemToPush)
    });

    return (
        <div className="slider">
            <h3 className="title-sliders">category</h3>
            <div className="sliders">
                {slidersComponent}
            </div>
        </div>
    )
}

export default SliderCreate;