import { USERS_LOAD_SUCCESS, USERS_CREATE_SUCCESS } from "../actions";

const initialState = [];
function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOAD_SUCCESS: {
      return {
        ...state,
        data: action.data,
      };
    }

    case USERS_CREATE_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default reducer;
