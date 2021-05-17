import {types} from '../types/types';

const initialState = {
  loading: false,
  noContent: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loading:
      return {
        ...state,
        loading: action.payload,
      };
    case types.endLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case types.noContent:
      return {
        ...state,
        noContent: action.payload,
      };
    default:
      return state;
  }
};
