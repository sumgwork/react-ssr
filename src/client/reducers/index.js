import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminReducer,
});
