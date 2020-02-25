import { combineReducers } from "redux";

const INITIAL_STATE = {
  currentCollection: "test",
  questions: [],
  collections: []
};

const questionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  questions: questionReducer
});
