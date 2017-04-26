import * as APIUtil from '../util/reviews_api_util.js';
import { receiveTruck } from './truck_actions';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const createReview = review => dispatch => {
  return(
    APIUtil.createReview(review).then(truck => dispatch(receiveTruck(truck)))
  );
};
