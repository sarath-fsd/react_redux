import { createStore } from "redux";

const reducer = (state = [], actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "addUser":
      console.log(state);
      const { userName, role } = payload;
      if (!state.some((u) => u.userName === userName)) {
        return [
          ...state,
          {
            userName,
            role
          }
        ];
      }

      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
