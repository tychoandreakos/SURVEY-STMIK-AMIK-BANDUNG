import * as actionTypes from '../../util/actionTypes';

import clumsy from '@iconify/icons-mdi/fish';
import money from '@iconify/icons-mdi/dollar';
import love from '@iconify/icons-mdi/heart';
import up from '@iconify/icons-mdi/1up';
import social from '@iconify/icons-mdi/facebook';
import zoomIn from '@iconify/icons-mdi/zoom-in';

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
        icon: up,
        title: 'UP',
        active: false,
        current: false,

    },
    {
        icon: social,
        title: 'Social Media',
        active: false,
        current: false,
    },
    {
        icon: zoomIn,
        title: 'Zoom In',
        active: false,
        current: false,
    },
];

const initialState = {
    surveyCategory: slider
};

function rootReducer(state = initialState, action) {
    if (action.type === actionTypes.SET_TITLE_SURVEY) {
        return {
            ...state,
            [actionTypes.SET_TITLE_SURVEY]: action.payload
        }
    }

    return state;
};

export default rootReducer;