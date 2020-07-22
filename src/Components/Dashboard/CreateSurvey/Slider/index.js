import React, { useRef, useState} from 'react';

import SlidersCreate from './Sliders';
import arrowLeft from '@iconify/icons-mdi/arrow-left'
import arrowRight from '@iconify/icons-mdi/arrow-right'
import Button from '../Button';

import clumsy from '@iconify/icons-mdi/fish';
import money from '@iconify/icons-mdi/dollar';
import love from '@iconify/icons-mdi/heart';

import './style.scss';

const SliderCreate = () => {
    const slidersRef = useRef()
    const [elemState, setElemState] = useState({
        count: 1,
        width: 0
    })
    let countUpdate;
    const slider = [
        {
            icon: clumsy,
            title: 'fishy business',
            active: false,
            current: false,
        },
        {
            icon: money,
            title: 'money',
            active: true,
            current: false,
        },
        {
            icon: love,
            title: 'love',
            active: false,
            current: true,
        },
        {
            icon: love,
            title: 'love',
            active: false,
            current: false,

        },
        {
            icon: clumsy,
            title: 'fishy business',
            active: false,
            current: false,
        },
        {
            icon: clumsy,
            title: 'fishy business',
            active: false,
            current: false,
        },
    ];
    const slidersComponent = [];

    slider.forEach((item, i) => {
        const itemToPush = <SlidersCreate key={i} icon={item.icon} title={item.title} current={item.current} active={item.active} />;

        slidersComponent.push(itemToPush)
    });

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
        const elem = slidersRef.current.querySelector('.current-sliders');
        const el = elem.previousSibling;

        if (el == slidersRef.current.children[0] || el == slidersRef.current.children[1]) {

        } else {
            const move = elem.getBoundingClientRect().width + 15;
            const moveSlider = `-${move * (elemState.count - 1) - move}px`;
            setElemState({
                ...elemState.count,
                count: elemState.count - 1,
            })
            carousel(elem, el, moveSlider);
        }


    }

    const moveFoward = () => {
        const elem = slidersRef.current.querySelector('.current-sliders');
        const el = elem.nextSibling;
        const move = elem.getBoundingClientRect().width + 15;
        const moveSlider = `-${move * elemState.count}px`;
        setElemState({
            count: elemState.count + 1,
        })
        carousel(elem, el, moveSlider);
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
                <Button type="left" clicked={moveBack} icon={arrowLeft} />
                <Button type="right" clicked={moveFoward} icon={arrowRight} />
            </div>
            <div className="create">
                <Button type="another" />
            </div>
        </>
    )
}

export default SliderCreate;