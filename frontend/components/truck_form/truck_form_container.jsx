import { connect } from 'react-redux';
import TruckForm from './truck_form';

import { createTruck } from '../../actions/truck_actions';

const mapDispatchToProps = dispatch => ({
  createTruck: truck => dispatch(createTruck(truck))
});

export default connect(null, mapDispatchToProps)(TruckForm);
