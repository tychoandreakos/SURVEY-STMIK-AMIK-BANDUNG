import React from 'react';
import { connect } from 'react-redux';
import { setSurveyCategory } from '../../../../../Store/redux/action';

import './style.scss';

import { Icon } from '@iconify/react';
import checkIcon from '@iconify/icons-mdi/check';

const SlidersCreate = (props) => {

    const { icon, title, current, active, _id, setSlider } = props;

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

    const slidersHandler = () => {
        setSlider(_id)
    }

    return (
        <div onClick={slidersHandler} className={slidersOuter}>
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

const mapDispatchToProps = dispatch => {
    return {
        setSlider: item => dispatch(setSurveyCategory(item)),
    }
}

const SlidersCreateWrap = connect(null, mapDispatchToProps)(SlidersCreate)

export default SlidersCreateWrap;