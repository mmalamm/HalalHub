import React from 'react';
import Navbar from '../navbar/navbar_container';
import TruckList from '../trucklist/trucklist_container';
import TruckMap from '../truck_map/truck_map';

const IndexPage = () => {
  return (
    <div className="index-page">
      <header>
        <Navbar />
      </header>
      <section>
        <TruckList />
      </section>
    </div>
  );
};

export default IndexPage;
