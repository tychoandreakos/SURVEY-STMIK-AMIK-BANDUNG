import React from 'react';

const formBuilder = React.createContext({
    question: [],
    questionHandler: (val) => { }
});

export default formBuilder