import { createAction } from "@reduxjs/toolkit";
// import { SET_FILTER } from "./filter-types"; this & types-file deleted 

export const setFilter = createAction("filter/set");

/*
export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  }
};
*/