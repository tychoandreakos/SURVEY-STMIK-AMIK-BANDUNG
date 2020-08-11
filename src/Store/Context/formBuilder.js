import React from 'react';

const formBuilder = React.createContext({
    question: [],
    questionHandler: (val) => { },
    multiChoiceHandler: (val) => { },
    typeQuestion: "",
    typeHandler: (val) => { },
    headTitle: '',
    headTitleHandler: (val) => { },
    titleSurvey: '',
    descSurvey: '',
});

export default formBuilder