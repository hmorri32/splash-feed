const initialState = {
  photos: []
};

const FeaturedPhotos = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_PHOTOS":
      return Object.assign({}, state, {
        photos: state.photos.concat(action.data)
      });

    default:
      return state;
  }
};

export default FeaturedPhotos;
