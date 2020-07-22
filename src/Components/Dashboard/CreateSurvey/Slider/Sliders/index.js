import React from 'react';

import './style.scss';

import { Icon } from '@iconify/react';
import checkIcon from '@iconify/icons-mdi/check';

const SlidersCreate = ({ icon, title, current, active }) => {

    let check;
    const sliders = ['sliders-create'];
    const slidersOuterStack = ['sliders-outer'];

    if (active) {
        check = (
            <div className="active-sliders">
                <Icon icon={checkIcon} />
            </div>
        )

        sliders.push('active-create-sliders')
    }

    if (current)
        slidersOuterStack.push('current-sliders')

    const slidersClass = sliders.join(' ')
    const slidersOuter = slidersOuterStack.join(' ');


    return (
        <div className={slidersOuter}>
            <div className={slidersClass}>
                <div className="panel-sliders">
                    <div className="icon">
                        <Icon icon={icon} />
                    </div>
                    <h3>{title}</h3>
                    {check}
                </div>
            </div>
        </div>
    )
}

export default SlidersCreate;