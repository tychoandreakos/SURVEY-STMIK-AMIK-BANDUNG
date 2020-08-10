import * as actionTypes from '../../util/actionTypes';

import { v4 } from 'uuid';

import clumsy from '@iconify/icons-mdi/fish';
import money from '@iconify/icons-mdi/dollar';
import love from '@iconify/icons-mdi/heart';
import up from '@iconify/icons-mdi/1up';
import social from '@iconify/icons-mdi/facebook';
import zoomIn from '@iconify/icons-mdi/zoom-in';

const slider = [
    {
        _id: v4(),
        icon: clumsy,
        title: 'fishy business',
        active: false,
        current: false,
    },
    {
        _id: v4(),
        icon: money,
        title: 'money',
        active: true,
        current: false,
    },
    {
        _id: v4(),
        icon: love,
        title: 'love',
        active: false,
        current: true,
    },
    {
        _id: v4(),
        icon: up,
        title: 'UP',
        active: false,
        current: false,

    },
    {
        _id: v4(),
        icon: social,
        title: 'Social Media',
        active: false,
        current: false,
    },
    {
        _id: v4(),
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

    if (action.type === actionTypes.SET_SURVEY_CATEGORY) {
        const newSurvey = state.surveyCategory.map(item => {
            if (item.active) {
                item.active = false
            }

            if (item._id == action.payload) {
                item.active = true
            }

            return item;
        });


        return {
            ...state,
            surveyCategory: newSurvey
        };
    }

    return state;
};

export default rootReducer;