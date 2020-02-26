import { combineReducers } from "redux";

const INITIAL_STATE = {
  userId: ""
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      state.userId = action.payload;
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionReducer
});
