import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

import TruckReviewForm from './review_form';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

const mapStateToProps = ({ truck }) => ({
  truck
});

export default connect(null, mapDispatchToProps)(TruckReviewForm);
