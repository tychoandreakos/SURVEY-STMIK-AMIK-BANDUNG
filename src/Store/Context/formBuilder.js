import React from 'react';

const formBuilder = React.createContext({
    multiChoiceHandler: (val) => { },
    typeQuestion: "",
    typeHandler: (val) => { },
    headTitle: '',
    headTitleHandler: (val) => { },
    titleSurvey: '',
    descSurvey: '',
    formBuilderHidden: () => {},
    edited: false,
    editedHandler: () => {},
    resultData: ''
});

export default formBuilder