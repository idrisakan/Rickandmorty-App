import {combineReducers} from 'redux';
import characterReaducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: characterReaducer,
});
export default rootReducer;
