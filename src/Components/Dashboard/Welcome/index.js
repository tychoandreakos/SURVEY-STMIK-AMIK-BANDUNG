import React, { useMemo, useCallback } from "react";
import { connect } from "react-redux";

import plus from "@iconify/icons-mdi/plus";
import Panel from "../Panel";

import "./style.scss";
import { SURVEY_LIST } from "../../../util/varTypes";

const Welcome = (props) => {
  const { getSurvey } = props;
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
    console.log(getSurvey);
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
        icon: 20,
        title: "total responses",
        desc: "the total amount of responses or feedback you get",
        active: false,
      },
    ];
  }, [totalSurvey, openSurvey]);

  const mainText = useMemo(() => {
    return {
      welcomeText:
        "Selamat Datang kembali, Rani Mulyani. Mau buat survey apa hari ini?",
      descText: "Art is the proper task of life - Friedrich Nietzsche.",
      letStart: "let's, begin",
    };
  });

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
  };
};

const WelcomeJoinRedux = connect(mapStateToProps)(Welcome);

export default WelcomeJoinRedux;
