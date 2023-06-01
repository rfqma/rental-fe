import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../redux";
import Helmet from "react-helmet";

function CarContainer({ carData, fetchCars }) {
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
  return carData.loading ? (
    <h2>Loading</h2>
  ) : carData.error ? (
    <h2>{carData.error}</h2>
  ) : carData.length === 0 ? (
    <div
      class="alert alert-danger text-center"
      role="alert"
      style={{ width: "350px", alignItems: "center", margin: "auto" }}
    >
      Tidak ada data!
    </div>
  ) : (
    <div className="row mt-4" id="car-container">
      <Helmet>
        <link rel="stylesheet" href="css/carimobilstyle.css" />
      </Helmet>
      {carData.map((car) => (
        <div
          className="col-md-4 mt-4 d-flex justify-content-center"
          key={car.id}
        >
          <div className="card">
            <img
              src={car.image}
              className="card-img-top"
              style={{ height: "250px", minWidth: "355px" }}
              alt={car.id}
            />
            <div className="card-body">
              <p className="card-title ">
                {car.manufacture} {car.model} / {car.type}
              </p>
              <p className="card-text fw-bold harga">
                Rp. {car.rentPerDay} / hari
              </p>
              <p className="card-text mt-3">{car.description}</p>
              <p className="card-text">
                <i className="fa fa-user me-1" /> {car.capacity} Orang
              </p>
              <p className="card-text">
                <i className="fa fa-gear me-1" /> {car.transmission}
              </p>
              <p className="card-text">
                <i className="fa fa-calendar me-1" /> Tahun {car.year}
              </p>

              <a href=" " className="btn btn-light-green w-100 mt-3">
                Pilih Mobil
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    carData: state.cars.filteredItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCars: () => dispatch(fetchCars()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
