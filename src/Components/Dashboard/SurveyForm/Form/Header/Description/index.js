import React from 'react';

import './style.scss';

const DescriptionHeader = () => {
    return (
        <div className="description-survey-header">
            <div className="top">
                <span className="title">Page Description</span>
                <div className="handling">
                    <button>EDIT</button>
                </div>
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt praesentium aperiam ex sapiente accusantium!</h3>
            <span className="desc">Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
        </div>
    )
}

export default DescriptionHeader;