import userReducer from "./User/reducer";
import membersReducer from "./Members/reducer";
import tasksReducer from "./Tasks/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  members: membersReducer,
  tasks: tasksReducer,
});

export default rootReducer;
