const unsplash = "https://api.unsplash.com/";

export const storeFeaturedPhotos = photos => {
  return {
    type: "STORE_PHOTOS",
    data: photos
  };
};

export const preLoad = photos => {
  return {
    type: "LAZY_LOAD",
    data: photos
  };
};

export const storeSearchedPhotos = photos => {
  return {
    type: "STORE_SEARCHED",
    data: photos
  };
};

export const fetchFeaturedPhotos = () => {
  return dispatch => {
    return fetch(
      `${unsplash}/collections/featured/?client_id=${
        process.env.REACT_APP_SPLASH_ID
      }&per_page=6`
    );
  };
};

export const fetchSearchedPhotos = (query) => {
  return dispatch => {
    return fetch(
      `${unsplash}/search/photos/?client_id=${
        process.env.REACT_APP_SPLASH_ID
      }&per_page=6&query=${query}`
    );
  };
};

export const generatorFetch = url => {
  return async dispatch => {
    const initialFetch = await fetch(url);
    const photos = await initialFetch.json();
    dispatch(preLoad(photos));
  };
};
