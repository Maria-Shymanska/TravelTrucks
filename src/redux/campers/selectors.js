export const selectCampers = (state) => state.campers.items;
export const selectTotalCampers = (state) => state.campers.total;
export const selectIsLoading = (state) => state.campers.loading;
export const selectCampersError = (state) => state.campers.error;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectFilters = (state) => state.campers.filters.filters;
export const selectPage = (state) => state.campers.page;
export const selectFavorite = (state) => state.campers.favoriteCampers;
export const selectUniqueLocations = (state) => state.campers.uniqueLocations;
