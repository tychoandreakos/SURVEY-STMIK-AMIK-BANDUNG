import React from 'react';

import './style.scss';

import { Icon } from '@iconify/react';
import checkIcon from '@iconify/icons-mdi/check';

const SlidersCreate = ({ icon, title, active }) => {

    let check;
    const sliders = ['sliders-create'];
    if (active) {
        check = (
            <div className="active-sliders">
                <Icon icon={checkIcon} />
            </div>
        )
        sliders.push('active-create-sliders')
    }

    const slidersClass = sliders.join(' ')


    return (
        <div className={slidersClass}>
            <div className="panel-sliders">
                <div className="icon">
                    <Icon icon={icon} />
                </div>
                <h3>{title}</h3>
                {check}
            </div>
        </div>
    )
}

export default SlidersCreate;