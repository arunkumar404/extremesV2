import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  openSidebarDrawer: ""
}

const mainSlice = createSlice( {
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    setOpenSidebarDrawer: ( state, action ) => {
      state.openSidebarDrawer = action.payload
    },
  },
} )

export const { setOpenSidebarDrawer } = mainSlice.actions
export const mainReducer = mainSlice.reducer
