import React from 'react';

import Icon from '@iconify/react'
import BreadcrumbsIcon from '@iconify/icons-mdi/design';
import Arrow from '@iconify/icons-mdi/chevron-right';
import Collect from '@iconify/icons-mdi/box-cutter';
import Share from '@iconify/icons-mdi/link';

import './style.scss';

const BreadcrumbsHeader = () => {

    const breadcrumbs = [
        {
            icon: BreadcrumbsIcon,
            title: 'design',
        },
        {
            icon: Collect,
            title: 'collect'
        },
        {
            icon: Share,
            title: 'share'
        }
    ]

    const arrowElem = (
        <div className="icon-outer">
            <Icon icon={Arrow} />
        </div>
    )

    const elemBreadcrumbs = breadcrumbs.map((item, index) => (
        <div className="breadcrumbs" key={index}>
            <div className="inner">
                <div className="icon">
                    <Icon icon={item.icon} />
                </div>
                <h5>{item.title}</h5>
            </div>
            {(breadcrumbs.length - 1) != index ? arrowElem : undefined}
        </div>
    ))


    return (
        <div className="breadcrumb-header">
            {elemBreadcrumbs}
        </div >
    )
}

export default BreadcrumbsHeader;