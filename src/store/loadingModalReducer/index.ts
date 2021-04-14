import { SET_LOADING_DATA } from './action';
import { IAction } from "../../interface/interface";

export const isLoadingModalData = (state: boolean) => state;

const loadingModalReducer = (isLoading = false, action: IAction) => {
  switch (action.type) {
    case SET_LOADING_DATA:
      return action.isLoading;

    default:
      return isLoading;
  }
}

export default loadingModalReducer;
