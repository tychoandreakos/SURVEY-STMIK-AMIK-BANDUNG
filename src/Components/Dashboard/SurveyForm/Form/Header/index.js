import React from 'react';

import LogoButton from './LogoButton';

const HeaderForm = () => {
    return (
        <div className="header-form-survey">
            <LogoButton />
            <h3>what is your favorite band?</h3>
            <span className="desc">Who is your favorite band all the time? Please answer the question if your ready. We really appreciate your answer :)</span>
        </div>
    )
}

export default HeaderForm;