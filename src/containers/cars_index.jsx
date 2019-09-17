import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions/index';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    const { fetchCars, garage } = this.props;
    fetchCars(garage);
  }

  render () {
    const { cars, garage } = this.props;
    if (cars.length === 0) {
      return [
        <Aside key="aside" garage={garage}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Aside key="aside" garage={garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src="assets/images/logo_square.svg" alt="logo" />
              <div className="car-details">
                <span>
                  {car.brand}
                  {" - "}
                  {car.model}
                </span>
                <ul>
                  <li>
                    <strong>Owner:</strong>
                    {` ${car.owner}`}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
