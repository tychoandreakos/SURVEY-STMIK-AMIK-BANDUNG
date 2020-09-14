import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";

import DropdownSurveyList from "./Dropdown";
import { Icon } from "@iconify/react";
import dots from "@iconify/icons-mdi/dots-horizontal";
import { gsap } from "gsap";

import "./style.scss";

const Survey = (props) => {
  const {
    title,
    logo,
    status,
    createdAt,
    modifiedAt,
    _id,
    totalQuestion = 0,
    totalResponse = 0,
    totalComments = 0,
  } = props;
  const sizeDots = useMemo(() => 30, []);
  const mapPropsTotal = useMemo(() => {
    return [
      {
        total: totalQuestion,
        title: "questions",
      },
      {
        total: totalResponse,
        title: "responses",
      },
      {
        total: totalComments,
        title: "comments",
      },
    ];
  }, [totalComments, totalQuestion, totalResponse]);

  const imageStyle = useMemo(() => {
    let style;
    const url = process.env.REACT_APP_BASE_URL_API + "/images/" + logo;
    if (logo) {
      style = {
        background: "url('" + url + "')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    } else {
      style = {
        background: "#edf0f0",
      };
    }

    return style;
  }, [logo]);

  const [dropdown, setDropdown] = useState(false);
  const [draft, setDraft] = useState(false);
  const [show, setShow] = useState(true);
  const surveyRef = useRef();
  const deleteAnim = useCallback(() => {
    gsap.to(surveyRef.current, {
      x: 100,
      autoAlpha: 0,
    });
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [surveyRef]);

  const dateFormat = (val) => {
    return val.split("T")[0].split("-").join("/");
  };

  useEffect(() => {
    if (status === "true" || status === true) {
      setDraft(true);
    }
  }, [status]);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const checkingIfLessThanZero = (val) => {
    if (val <= 0) {
      return 0;
    }

    return val;
  };

  let dropdownRender;
  if (dropdown) {
    dropdownRender = (
      <DropdownSurveyList
        onDeleteAnim={deleteAnim}
        _id={_id}
        dropdownHandler={dropdownHandler}
      />
    );
  }

  const statusRender = mapPropsTotal.map((item, index) => (
    <div key={index} className='status-info'>
      <h4>{checkingIfLessThanZero(item.total)}</h4>
      <span>{item.title}</span>
    </div>
  ));

  let draftBadgeRender;
  if (draft) {
    draftBadgeRender = (
      <div className='draft-badge'>
        <span>draft</span>
      </div>
    );
  }

  let renderSurvey;
  if (show) {
    renderSurvey = (
      <div ref={surveyRef} className='survey'>
        <div className='first'>
          <div className='logo'>
            <div style={imageStyle} className='logo-wrapper'></div>
          </div>
          <div className='info'>
            <h3>{title}</h3>
            <div className='description'>
              <span>created: {dateFormat(createdAt)}</span>
              <span>modified: {dateFormat(modifiedAt)}</span>
            </div>
          </div>
        </div>
        <div className='second'>
          <div onClick={dropdownHandler} className='settings'>
            <Icon width={sizeDots} height={sizeDots} icon={dots} />
            <span>options</span>
          </div>
          <div className='status'>{statusRender}</div>
        </div>
        {draftBadgeRender}
        {dropdownRender}
      </div>
    );
  }

  return renderSurvey ?? null;
};

export default Survey;
