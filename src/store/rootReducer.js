import { combineReducers } from '@reduxjs/toolkit';
import { mainReducer } from './main/slice';

const rootReducer = combineReducers( {
  mainSlice: mainReducer,

} );

export default rootReducer;

