import React from 'react';

const formBuilder = React.createContext({
    question: [],
    questionHandler: (val) => { },
    headTitle: '',
    titleSurvey: '',
    descSurvey: '',
});

export default formBuilder