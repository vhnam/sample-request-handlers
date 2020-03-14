import {
  USERS_GET_REQUESTED,
  USERS_GET_FAILED,
  USERS_GET_SUCCESS,
} from '../constants/users';

const initialState = {
  data: [],
  isLoading: false,
  isFailed: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case USERS_GET_REQUESTED: {
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    }
    case USERS_GET_SUCCESS: {
      return {
        ...state,
        data: payload,
        isLoading: false,
        isFailed: false,
      };
    }
    case USERS_GET_FAILED: {
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    }
    default:
      return state;
  }
};
