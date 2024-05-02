import { createSelector } from "@reduxjs/toolkit";
import { initialState } from './slice'

const selectMain = ( state ) => state.mainSlice || initialState

export const selectOpenSidebarDrawer = createSelector( [ selectMain ], ( state ) => {
  return state.openSidebarDrawer
} )