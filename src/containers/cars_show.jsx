import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import { fetchCar } from '../actions/index';
import Aside from '../components/aside';

class CarsShow extends Component {
  // componentWillMount() {
  //   const { car, fetchCar, params } = this.props;
  //   if (!car) {
  //     fetchCar(params.id);
  //   };
  // }

  render () {
    const { car, garage } = this.props;
    if (!car) {
      return (
        <Aside key="aside" garage={garage}>
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside" garage={garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="/assets/images/logo_square.svg" alt="car-logo"/>
          <div className="car-details">
            <span>{`${car.brand} - ${car.model}`}</span>
            <ul>
              <li>
                <strong>Owner:</strong>
                {` ${car.owner}`}
              </li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button type="button" className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const correctCar = () => {
    return state.cars.find(car => car.id === id);
  };
  console.log(correctCar());
  return {
    garage: state.garage,
    car: correctCar()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
