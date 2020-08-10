import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SURVEY_CATEGORY } from '../../../../util/varTypes';

import SlidersCreate from './Sliders';
import arrowLeft from '@iconify/icons-mdi/arrow-left'
import arrowRight from '@iconify/icons-mdi/arrow-right'
import Button from '../Button';

import './style.scss';

const SliderCreate = (props) => {
    const slidersRef = useRef()
    const [elemState, setElemState] = useState({
        count: 1,
        width: 0
    })

    const [previous, setPrevious] = useState(false);


    const { slider } = props;
    const slidersComponent = [];

    slider.forEach(item => {
        const itemToPush = <SlidersCreate key={item._id} _id={item._id} icon={item.icon} title={item.title} current={item.current} active={item.active} />;

        slidersComponent.push(itemToPush)
    });

    useEffect(() => {
        if (previous && elemState.count === 1) {
            setPrevious(!previous)
        }
    }, [elemState, previous])

    const carousel = (elem, el, move) => {
        const className = 'current-sliders';

        if (el) {
            slidersRef.current.style.left = move;
            elem.classList.remove(className);
            el.classList.add(className);
        } else {
            elem.classList.remove(className);
            slidersRef.current.children[2].classList.add(className);
            slidersRef.current.style.left = '0px';
            setElemState({
                count: 1,
            })
        }
    }

    const moveBack = () => {
        if (previous) {
            const elem = slidersRef.current.querySelector('.current-sliders');
            const el = elem.previousSibling;

            if (el === slidersRef.current.children[0] || el === slidersRef.current.children[1])
                return false
            else {
                const move = elem.getBoundingClientRect().width + 15;
                const moveSlider = `-${move * (elemState.count - 1) - move}px`;
                setElemState({
                    ...elemState.count,
                    count: elemState.count - 1,
                })
                carousel(elem, el, moveSlider);
            }
        }
    }

    const moveFoward = () => {
        const elem = slidersRef.current.querySelector('.current-sliders');
        const el = elem.nextSibling;
        const move = elem.getBoundingClientRect().width + 15;
        const moveSlider = `-${move * elemState.count}px`;
        if (!previous) setPrevious(!previous)
        setElemState({
            count: elemState.count + 1,
        })
        carousel(elem, el, moveSlider);
    }

    const createSurveyHandler = () => {
        console.log('its working')
    }

    return (
        <>
            <div className="slider">
                <h3 className="title-sliders">category</h3>
                <div className="sliders-wrapper">
                    <div ref={slidersRef} className="sliders">
                        {slidersComponent}
                    </div>
                </div>
            </div>
            <div className="button-create">
                <Button status={previous} type="left" clicked={moveBack} icon={arrowLeft} />
                <Button type="right" clicked={moveFoward} icon={arrowRight} />
            </div>
            <div className="create">
                <Button clicked={createSurveyHandler} type="another" />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        slider: state[SURVEY_CATEGORY]
    }
}


const sliderWrap = connect(mapStateToProps)(SliderCreate);

export default sliderWrap;