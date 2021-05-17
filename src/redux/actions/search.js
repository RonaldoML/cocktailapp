import {types} from '../types/types';

export const startLoadingAction = () => {
  return async dispatch => {
    dispatch(startLoading());
    dispatch(noContent(false));
  };
};

export const endLoadingAction = () => {
  return async dispatch => {
    dispatch(endLoading());
  };
};

export const noContentAction = isContent => {
  return async dispatch => {
    dispatch(noContent(isContent));
  };
};

const startLoading = () => ({
  type: types.loading,
  payload: true,
});
const endLoading = () => ({
  type: types.endLoading,
  payload: false,
});

const noContent = payload => ({
  type: types.noContent,
  payload,
});
