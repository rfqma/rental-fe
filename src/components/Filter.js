import React, { useState } from "react";
import { connect } from "react-redux";
import { filterCars } from "../redux";

const initialValues = (carresult) => {
  return {
    driverType: "",
    date: "",
    passenger: "",
  };
};

function Filter({ cars, filterCars }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="card card-cari-mobil">
      <div className="card-body">
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <label>Tipe Driver</label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="driver-type"
                    aria-label="Example select with button addon"
                    value={values.driverType}
                    onChange={handleChange}
                    name="driverType"
                  >
                    <option value="">Pilih Tipe Driver</option>
                    <option value="dengansopir">Dengan Sopir</option>
                    <option value="tanpasopir">
                      Tanpa Sopir (Lepas Kunci)
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="date">Tanggal</label>
                <div className="input-group" id="datepicker">
                  <input
                    type="date"
                    className="form-control"
                    id="tanggal"
                    onChange={handleChange}
                    value={values.date}
                    name="date"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3">
                <label>Waktu Jemput/Ambil</label>
                <div className="input-group">
                  <select
                    className="form-select"
                    id="time"
                    aria-label="Example select with button addon"
                  >
                    <option value="">Pilih Waktu</option>
                    <option value="08:00:00">08.00 WIB</option>
                    <option value="09:00:00">09.00 WIB</option>
                    <option value="10:00:00">10.00 WIB</option>
                    <option value="11:00:00">11.00 WIB</option>
                    <option value="12:00:00">12.00 WIB</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label>Jumlah Penumpang (optional) </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="passenger-value"
                    placeholder="Jumlah Penumpang"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={values.passenger}
                    onChange={handleChange}
                    name="passenger"
                  />
                  <span className="input-group-text">
                    <i className="fa-solid fa-user" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-center button-cari">
            <button
              id="search-btn"
              className="btn btn-success fw-bold"
              onClick={() => {
                filterCars(
                  cars,
                  values.driverType,
                  values.date,
                  values.passenger
                );
              }}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    carData: state.cars,
    cars: state.cars.cars,
    driverType: state.cars.driverType,
    date: state.cars.date,
    passenger: state.cars.passenger,
    filteredCars: state.cars.filteredItems,
  };
};

export default connect(mapStateToProps, { filterCars })(Filter);
