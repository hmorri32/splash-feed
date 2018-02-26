const unsplash = "https://api.unsplash.com/";

export const storeFeaturedPhotos = photos => {
  return {
    type: "STORE_PHOTOS",
    data: photos
  };
};

export const fetchFeaturedPhotos = () => {
  return dispatch => {
    return fetch(
      `${unsplash}/collections/featured/?client_id=${
        process.env.REACT_APP_SPLASH_ID
      }`
    );
  };
};
