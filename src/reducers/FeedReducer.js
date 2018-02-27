const initialState = {
  photos: []
};

const FeaturedPhotos = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case "STORE_PHOTOS":
      return Object.assign({}, state, {
        photos: state.photos.concat(data)
      });

    case "LAZY_LOAD":
      return Object.assign({}, state, {
        photos: state.photos.concat(data)
      });

    default:
      return state;
  }
};

export default FeaturedPhotos;
