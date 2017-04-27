import React from 'react';
import TruckListItem from './trucklist_item';

class TruckList extends React.Component {
  componentDidMount() {
    this.props.requestTrucks();
  }

  render() {
    const { trucks } = this.props;
    const truckItems = trucks.map(truck => (
      <TruckListItem
        key={ truck.id }
        truck={ truck }/>
      )
    );

    return(
      <div >
        <ul>
          { truckItems }
        </ul>
      </div>
    );
  }
}

export default TruckList;
