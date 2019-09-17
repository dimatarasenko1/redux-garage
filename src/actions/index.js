export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCars(garage) {
  // TODO: Implement correct car-fetching from API
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function deleteCar(history, car) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}

export function fetchCar(id) {
  // TODO: Implement correct car-fetching from API
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(r => r.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function addCar(garage, car, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());


  return {
    type: 'ADD_CAR',
    payload: request // Will be resolved by redux-promise
  };
}
