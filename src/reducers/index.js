import {combineReducers} from 'redux';
import document from './document';
import entries from './entries';
import menu from './menu';

export default combineReducers({
  document,
  entries,
  menu,
});
