import React from 'react';
import { v4 as uuid } from 'uuid'
import MultipleChoice from '@iconify/icons-mdi/view-list-outline'
import Checkboxes from '@iconify/icons-mdi/checkbox-marked';
import StarRating from '@iconify/icons-mdi/star-circle';
import DropdownIcon from '@iconify/icons-mdi/form-dropdown';
import SingleTextBox from '@iconify/icons-mdi/text-box';
import MultipleTextBox from '@iconify/icons-mdi/text-box-multiple';
import TextIcon from '@iconify/icons-mdi/android-messages';
import Ranking from '@iconify/icons-mdi/award';
import DateAndTime from '@iconify/icons-mdi/calendar-range';
import CommentBox from '@iconify/icons-mdi/comment-text-multiple';


const sampleData = [
    {
        _id: uuid(),
        title: "Multiple Choice",
        icon: MultipleChoice
    },
    {
        _id: uuid(),
        title: "Checkboxes",
        icon: Checkboxes
    },
    {
        _id: uuid(),
        title: "Star Rating",
        icon: StarRating
    },
    {
        _id: uuid(),
        title: "dropdown",
        icon: DropdownIcon,
    },
    {
        _id: uuid(),
        title: "single textbox",
        icon: SingleTextBox
    },
    {
        _id: uuid(),
        title: "multiple textbox",
        icon: MultipleTextBox
    },
    {
        _id: uuid(),
        title: "text",
        icon: TextIcon
    },
    {
        _id: uuid(),
        title: "ranking",
        icon: Ranking
    },
    {
        _id: uuid(),
        title: "date / time",
        icon: DateAndTime
    },
    {
        _id: uuid(),
        title: "comment box",
        icon: CommentBox
    }
]

const DropdownAlternateContext = React.createContext({
    elementDropdown: sampleData,
    dropdown: false,
    dropdownHandler: () => { }
});

export default DropdownAlternateContext