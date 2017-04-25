import { connect } from 'react-redux';
import TruckForm from './truck_form';

import { createTruck } from '../../actions/truck_actions';

// const mapStateToProps = ({ trucks }) => {
//   debugger
//   return ({
//     trucks
//   });
// }

const mapDispatchToProps = dispatch => ({
  createTruck: truck => dispatch(createTruck(truck)),
  clearErrors: () => dispatch()
});

export default connect(null, mapDispatchToProps)(TruckForm);
