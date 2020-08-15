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

import { TYPE_QUESTION } from '../../util/varTypes';

const sampleData = [
    {
        _id: uuid(),
        title: "Multiple Choice",
        icon: MultipleChoice,
        type: TYPE_QUESTION.MULTIPLE
    },
    {
        _id: uuid(),
        title: "Checkboxes",
        icon: Checkboxes,
        type: TYPE_QUESTION.CHECKBOX
    },
    {
        _id: uuid(),
        title: "Star Rating",
        icon: StarRating,
        type: TYPE_QUESTION.STAR
    },
    {
        _id: uuid(),
        title: "dropdown",
        icon: DropdownIcon,
        type: TYPE_QUESTION.DROPDOWNFORMAT,
    },
    {
        _id: uuid(),
        title: "single textbox",
        icon: SingleTextBox,
        type: TYPE_QUESTION.SINGLETEXTBOX,
    },
    {
        _id: uuid(),
        title: "multiple textbox",
        icon: MultipleTextBox,
        type: TYPE_QUESTION.MULTIPLETEXTBOX,
    },
    {
        _id: uuid(),
        title: "text",
        icon: TextIcon,
        type: TYPE_QUESTION.TEXTFORMAT
    },
    {
        _id: uuid(),
        title: "ranking",
        icon: Ranking,
        type: TYPE_QUESTION.RANKING
    },
    {
        _id: uuid(),
        title: "date / time",
        icon: DateAndTime,
        type: TYPE_QUESTION.DATEANDTIME
    },
    {
        _id: uuid(),
        title: "comment box",
        icon: CommentBox,
        type: TYPE_QUESTION.COMMENTBOX
    }
]

const DropdownAlternateContext = React.createContext({
    elementDropdown: sampleData,
    dropdown: false,
    dropdownHandler: () => { }
});

export default DropdownAlternateContext