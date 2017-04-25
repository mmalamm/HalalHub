import React from 'react';
import Navbar from '../navbar/navbar_container';
import TruckList from '../trucklist/trucklist_container';

const IndexPage = () => (
  <div>
    <header>
      <Navbar />
    </header>
    <section>
      <TruckList />
    </section>
  </div>
);

export default IndexPage;
