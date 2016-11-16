import {combineReducers} from 'redux';
import entries from './entries';
import menu from './menu';

export default combineReducers({
  entries,
  menu,
});
