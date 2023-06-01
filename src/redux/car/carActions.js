import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  FILTER_CARS,
} from "./carTypes";
import axios from "axios";
export const fetchCarRequest = () => {
  return {
    type: FETCH_CARS_REQUEST,
  };
};

const fetchCarSuccess = (cars) => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: cars,
  };
};

const fetchCarFailure = (error) => {
  return {
    type: FETCH_CARS_FAILURE,
    payload: error,
  };
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(fetchCarRequest());
    axios
      .get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      )
      .then((response) => {
        const cars = response.data;
        dispatch(fetchCarSuccess(cars));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCarFailure(errorMsg));
      });
  };
};

export const filterCars = (car, driverType, date, passenger) => (dispatch) => {
  //console.log(date);
  //console.log(driverType);
  //console.log(passenger);
  console.log(car);

  let dateTime = new Date(date);
  let year = dateTime.getFullYear();
  console.log(dateTime.getFullYear());

  if (driverType === "dengansopir") {
    var result = car.filter(
      (item) =>
        item.available === true &&
        item.capacity >= passenger &&
        item.year >= year
    );
    console.log(result);
  } else if (driverType === "tanpasopir") {
    result = car.filter(
      (item) =>
        item.available === false &&
        item.capacity >= passenger &&
        item.year >= year
    );
    console.log(result);
  }

  return dispatch({
    type: FILTER_CARS,
    payload: {
      driverType: driverType,
      cars: result,
    },
  });
};
