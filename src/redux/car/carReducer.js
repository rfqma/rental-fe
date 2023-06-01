import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  FILTER_CARS,
} from "./carTypes";

const initialState = {
  loading: false,
  cars: [],
  filteredItems: [],
  driverType: "",
  date: "",
  passenger: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARS_SUCCESS:
      return {
        loading: false,
        cars: action.payload,
        filteredItems: action.payload,
        error: "",
      };
    case FETCH_CARS_FAILURE:
      return {
        loading: false,
        cars: [],
        filteredItems: [],
        error: action.payload,
      };
    case FILTER_CARS:
      return {
        ...state,
        filteredItems: action.payload.cars,
        driverType: action.payload.driverType,
        date: action.payload.date,
        passenger: action.payload.passenger,
      };
    default:
      return state;
  }
};

export default reducer;
