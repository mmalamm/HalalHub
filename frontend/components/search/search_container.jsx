import { connect } from 'react-redux';


////////
import { fetchTrucks } from '../../actions/truck_actions';
////////


import { allTrucks } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => ({
  trucks: allTrucks(state),
});

const mapDispatchToProps = dispatch => ({
  //////////
  requestTrucks: () => dispatch(fetchTrucks())
  /////////


});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
