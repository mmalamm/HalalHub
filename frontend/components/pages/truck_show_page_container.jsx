import { connect } from 'react-redux';
import TruckShowPage from './truck_show_page';

import { fetchTruck } from '../../actions/truck_actions';
import { selectTruck } from '../../reducers/selectors';

const mapStateToProps = (state, { params }) => {
  const truckId = parseInt(params.id);
  const truck = selectTruck(state, truckId);
  return {
    truckId,
    truck
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTruck: id => dispatch(fetchTruck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TruckShowPage);
