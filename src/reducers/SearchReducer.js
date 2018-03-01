const initialState = {
  photos: []
};

const Search = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case "STORE_SEARCHED":
      return Object.assign({}, state, {
        photos: state.photos.concat(data)
      });

    default:
      return state;
  }
};

export default Search;
