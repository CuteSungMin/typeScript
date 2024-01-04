import { combineReducers } from 'redux';
import {UpdateItemList} from "./actions"

const updatesReducer = (state: UpdateItemList[] = [], action: any) => {
  switch (action.type) {
    case 'ADD_UPDATE':
      return [action.payload, ...state];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  updates: updatesReducer,
});

export default rootReducer;