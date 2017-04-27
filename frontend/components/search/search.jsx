import React from 'react';


import TruckMap from '../truck_map/truck_map';
import Navbar from '../navbar/navbar_container';
import TruckList from '../trucklist/trucklist_container';

const Search = ({ trucks }) => (
  <div>
    <header>
      <Navbar />
    </header>
    <div className="search-page">
      <div className="main-map">
        <TruckMap trucks={trucks} />
      </div>
      <div className="trucklist">
        <TruckList trucks={trucks} />
      </div>
    </div>
  </div>
);

export default Search;
