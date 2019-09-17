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

export function fetchCar(id) {
  // TODO: Implement correct car-fetching from API
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(r => r.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}
