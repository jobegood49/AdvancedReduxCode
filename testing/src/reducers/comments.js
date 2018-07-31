import { SAVE_COMMENT } from "../actions/types";

export default function(state = [], action) {
  console.log('now we are in the reducer', state, action)
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
