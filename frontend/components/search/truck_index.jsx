import React from 'react';
import TruckListItem from '../trucklist/trucklist_item';

const TruckIndex = ({ trucks }) => (
  <div>
    <h1>Trucks: </h1>
    {trucks.map(truck => (
      <TruckListItem truck={truck} key={truck.id} />
    ))}
  </div>
);

export default TruckIndex;
