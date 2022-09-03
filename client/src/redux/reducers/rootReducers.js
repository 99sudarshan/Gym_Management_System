import { combineReducers } from "redux";
import changePicReducer from "./changePicReducer";
import { membersReducer } from "./membersReducer";
import { sidebarReducer } from "./sidebarReducer";
import systemUserReducer from "./systemUserReducer";
const rootReducer = combineReducers({
  toggle_sidebar: sidebarReducer,
  picture: changePicReducer,
  members: membersReducer,
  system_user: systemUserReducer,
});

export default rootReducer;
