import * as APIUtil from '../util/trucks_api_util';

export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS';
export const RECEIVE_TRUCK = 'RECEIVE_TRUCK';

export const receiveTrucks = trucks => ({
  type: RECEIVE_TRUCKS,
  trucks
});

export const receiveTruck = truck => ({
  type: RECEIVE_TRUCK,
  truck
});

export const createTruck = truck => dispatch => (
  APIUtil.createTruck(truck).then(truck => dispatch(receiveTruck(truck)))
);

export const fetchTruck = id => dispatch => (
  APIUtil.fetchTruck(id).then(truck => dispatch(receiveTruck(truck)))
);

export const fetchTrucks = filters => dispatch => (
  APIUtil.fetchTrucks(filters).then(trucks => dispatch(receiveTrucks(trucks)))
);
