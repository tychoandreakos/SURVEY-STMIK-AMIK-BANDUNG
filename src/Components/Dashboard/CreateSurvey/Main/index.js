import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTileSurvey } from '../../../../Store/redux/action';

import Slider from '../Slider';
import './style.scss';
const MainCreateSurvey = (props) => {


    const [title, setTitle] = useState('');
    const { addTitle } = props;
    const placeholder = "Type something here..."

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const saveTitleToRedux = () => {
        addTitle(title)
    }

    return (
        <div id="main-create">
            <div className="title">
                <h5 className="little-title">Create Survey</h5>
                <input onBlur={saveTitleToRedux} placeholder={placeholder} className="main-title" value={title} onChange={titleHandler} />
            </div>
            <Slider />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTitle: title => dispatch(setTileSurvey(title))
    }
}

const MainCreateSurveyJoinRedux = connect(null, mapDispatchToProps)(MainCreateSurvey)

export default MainCreateSurveyJoinRedux;