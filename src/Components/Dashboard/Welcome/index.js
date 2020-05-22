import React from 'react';

import plus from '@iconify/icons-mdi/plus';
import Panel from '../Panel';

import './style.scss';

const Welcome = () => {
  const welcomeText =
    'Selamat Datang kembali, Rani Mulyani. Mau buat survey apa hari ini?';
  const descText = 'Thousand now adware removal never though the could';
  const start = 'ayo mulai, ';

  const panelState = [
    {
      icon: plus,
      title: 'buat survey',
      desc: 'rancang survey sekarang juga',
      active: true,
    },
    {
      icon: 20,
      title: 'open',
      desc: 'Survey dalam proses',
      active: false,
    },
    {
      icon: 20,
      title: 'total survey',
      desc: 'hasil seluruh survey yang telah kamu buat',
      active: false,
    },
    {
      icon: 20,
      title: 'total respons',
      desc: 'hasil seluruh respons dari surveymu',
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
