import { connect } from 'react-redux';
import TruckList from './trucklist';

import { fetchTrucks } from '../../actions/truck_actions';
import { allTrucks } from '../../reducers/selectors'; //###

const mapStateToProps = state => ({
  trucks: allTrucks(state)
});

const mapDispatchToProps = dispatch => ({
  requestTrucks: () => dispatch(fetchTrucks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TruckList);
