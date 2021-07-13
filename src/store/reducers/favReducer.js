import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions/favActions";
import { favItems } from "../initialValues/favItems";

const initialState = {
  favItems: favItems,
};

export default function favReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAV:
      let jobAdvert = state.favItems.find((j) => j.jobAdvert.id === payload.id);
      if (jobAdvert) {
        jobAdvert.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favItems: [...state.favItems, { quantity: 1, jobAdvert: payload }],
        };
      }

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favItems: state.favItems.filter((j) => j.jobAdvert.id !== payload.id),
      };
    default:
      return state;
  }
}