const initialState = {
    articles: [{
        name: "dani",
        age: 20
    }, {
        name: "suhendri",
        age: 200
    }]
};

function rootReducer(state = initialState, action) {
    return state;
};

export default rootReducer;