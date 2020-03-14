import {fetchGetUsers} from '../apis/users';
import {
  USERS_GET_REQUESTED,
  USERS_GET_FAILED,
  USERS_GET_SUCCESS,
} from '../constants/users';

export const getUsers = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: USERS_GET_REQUESTED,
        });

        const response = await fetchGetUsers();

        dispatch({
          type: USERS_GET_SUCCESS,
          payload: response.data.data,
        });

        resolve(response.data);
      } catch (err) {
        reject(err);
        dispatch({
          type: USERS_GET_FAILED,
        });
      }
    });
  };
};
