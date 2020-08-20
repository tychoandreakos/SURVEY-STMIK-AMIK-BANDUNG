import React from 'react';

const formBuilder = React.createContext({
    multiChoiceHandler: (val) => { },
    typeQuestion: "",
    typeHandler: (val) => { },
    headTitle: '',
    headTitleHandler: (val) => { },
    titleSurvey: '',
    descSurvey: '',
    formBuilderHidden: () => {}
});

export default formBuilder