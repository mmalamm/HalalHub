import { connect } from 'react-redux';

import { allTrucks } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = state => ({
  trucks: allTrucks(state),
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
