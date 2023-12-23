const initialState = {
    loginValues: "",
  };

const formReducer = (state = initialState, action) => {
switch (action.type) {
    case 'UPDATE_LOGIN_VALUES':
    return {
        ...state,
        loginValues: action.payload,
    };
    default:
    return state;
}
};

export default formReducer;