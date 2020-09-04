import React from "react";

import Icon from "@iconify/react";
import Design from "@iconify/icons-mdi/brush";
import Arrow from "@iconify/icons-mdi/arrow-right";
import Collect from "@iconify/icons-mdi/hand-double-tap";
import Summary from "@iconify/icons-mdi/check-circle";

import "./style.scss";

const BreadcrumbsHeader = (props) => {
  const { match, history } = props;
  const breadcrumbs = [
    {
      icon: Design,
      title: "design survey",
      url: `${match.path}/`,
    },
    {
      icon: Collect,
      title: "collect responses",
      url: `${match.path}/collect`,
    },
    {
      icon: Summary,
      title: "summary & roundup",
      url: `${match.path}/summary`,
    },
  ];

  const arrowElem = (
    <div className='icon-outer'>
      <Icon icon={Arrow} />
    </div>
  );

  const breadcrumbHandler = (url) => {
    history.push(url);
  };

  const elemBreadcrumbs = breadcrumbs.map((item, index) => (
    <div
      onClick={() => breadcrumbHandler(item.url)}
      className='breadcrumbs'
      key={index}
    >
      <div className='inner'>
        <div className='icon'>
          <Icon icon={item.icon} />
        </div>
        <h5>{item.title}</h5>
      </div>
      {breadcrumbs.length - 1 !== index ? arrowElem : undefined}
    </div>
  ));

  return <div className='breadcrumb-header'>{elemBreadcrumbs}</div>;
};

export default BreadcrumbsHeader;
