import { CITIES_FETCHED } from "./actions";

const initialState = [];

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case CITIES_FETCHED:
      return action.payload.sort((a, b) => a.name.localeCompare(b.name));

    default:
      return state;
  }
}
