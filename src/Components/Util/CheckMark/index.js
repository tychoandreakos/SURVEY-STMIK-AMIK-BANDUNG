import React, { useEffect } from 'react';

import './style.scss';

const CheckMark = () => {
    return (
        <div class="success-checkmark" >
            <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
            </div>
        </div >
    )
}

export default CheckMark;