import React from 'react';

import TruckIndex from './truck_index';
import TruckMap from '../truck_map/truck_map';

const Search = ({ trucks }) => (
  <div>
    <TruckMap trucks={trucks} />
    <TruckIndex trucks={trucks} />
  </div>
);

export default Search;
