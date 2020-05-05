import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_CURRENT_USER = "fetch_current_user";

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get(
    "http://react-ssr-api.herokuapp.com/users"
  );
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  const res = await axiosInstance.get("/current_user");
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
