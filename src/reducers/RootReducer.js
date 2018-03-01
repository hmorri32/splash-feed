import { combineReducers } from "redux";
import FeaturedPhotos from "./FeedReducer";
import Search from "./SearchReducer";

export default combineReducers({
  FeaturedPhotos,
  Search
});