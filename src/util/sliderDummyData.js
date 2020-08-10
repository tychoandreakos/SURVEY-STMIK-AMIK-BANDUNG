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

export default slider;