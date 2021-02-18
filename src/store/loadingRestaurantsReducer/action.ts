export const SET_LOADING = 'SET_LOADING';

export const setLoadingRestaurants = (isLoading: boolean) => ({
  type: SET_LOADING,
  isLoading,
});
