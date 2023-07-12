// SEARCH FUNCTIONALITY with filtering process
export function filterData(searchText, restaurant) {
    const filterDatas = restaurant.filter(
      (restaurant) =>
        restaurant?.data?.data?.name
          ?.toLowerCase()
          ?.includes(searchText.toLowerCase())
      // IF INSIDE ARRAY IT INCLUDES SEARCHTEXT JUST FILTEROUT
    );
    return filterDatas;
  }