import React, { useMemo, useCallback } from "react";
import { connect } from "react-redux";

import plus from "@iconify/icons-mdi/plus";
import Panel from "../Panel";
import { SURVEY_LIST, USER } from "../../../util/varTypes";

import "./style.scss";

const Welcome = (props) => {
  const { getSurvey, authInfo } = props;
  const checkGetSurvey = useCallback(
    () => getSurvey.hasOwnProperty("success"),
    [getSurvey]
  );
  const totalSurvey = useMemo(() => {
    if (checkGetSurvey()) {
      return getSurvey.result.total;
    }

    return 0;
  }, [checkGetSurvey, getSurvey]);

  const openSurvey = useMemo(() => {
    if (checkGetSurvey()) {
      return getSurvey.result.data.filter((item) => !item.status).length;
    }

    return 0;
  }, [checkGetSurvey, getSurvey]);

  const panelState = useMemo(() => {
    return [
      {
        icon: plus,
        title: "create survey",
        desc: "design your survey now!",
        active: true,
      },
      {
        icon: openSurvey,
        title: "open surveys",
        desc:
          "the total amount of surveys you have been created & still opened",
        active: false,
      },
      {
        icon: totalSurvey,
        title: "total surveys",
        desc: "the total amount of surveys you have been created",
        active: false,
      },
      {
        icon: 0,
        title: "total responses",
        desc: "the total amount of responses or feedback you get",
        active: false,
      },
    ];
  }, [totalSurvey, openSurvey]);

  const mainText = useMemo(() => {
    return {
      welcomeText: `Selamat Datang kembali, ${authInfo && authInfo.name ? authInfo.name : "RANI MULYANI"}. Mau buat survey apa hari ini?`,
      descText: "Art is the proper task of life - Friedrich Nietzsche.",
      letStart: "let's, begin",
    };
  }, [authInfo]);

  const panelEl = panelState.map((item, i) => (
    <Panel
      active={item.active}
      title={item.title}
      desc={item.desc}
      icon={item.icon}
      key={i}
    />
  ));

  return (
    <div className='welcome'>
      <div className='title'>
        <h3>{mainText.welcomeText}</h3>
        <span>{mainText.descText}</span>
      </div>
      <div className='panel'>
        <span className='start'>{mainText.letStart}</span>
        <div className='panel-element'>{panelEl}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getSurvey:
      state[SURVEY_LIST.FETCH_SURVEY_LIST][SURVEY_LIST.SURVEY_LIST_SUCCESS],
    authInfo: state[USER],
  };
};

const WelcomeJoinRedux = connect(mapStateToProps)(Welcome);

export default WelcomeJoinRedux;
