import React from "react";

import plus from "@iconify/icons-mdi/plus";
import Panel from "../Panel";

import "./style.scss";

const Welcome = () => {
  const welcomeText =
    "Selamat Datang kembali, Rani Mulyani. Mau buat survey apa hari ini?";
  const descText =
    "Art is the proper task of life - Friedrich Nietzsche.";
  const start = "lets begin, ";

  const panelState = [
    {
      icon: plus,
      title: "create survey",
      desc: "design your survey now!",
      active: true,
    },
    {
      icon: 20,
      title: "open surveys",
      desc: "the total amount of surveys you have been created & still opened",
      active: false,
    },
    {
      icon: 20,
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
        <h3>{welcomeText}</h3>
        <span>{descText}</span>
      </div>
      <div className='panel'>
        <span className='start'>{start}</span>
        <div className='panel-element'>{panelEl}</div>
      </div>
    </div>
  );
};

export default Welcome;
