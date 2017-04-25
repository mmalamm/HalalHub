import React from 'react';
import Navbar from '../navbar/navbar_container';
import TruckListItem from '../trucklist/trucklist_item';

class TruckShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTruck(this.props.params.id);
  }

  render() {
    const { truck } = this.props;

    const truckOrSpinner = () => {
      if (truck) {
        return (<TruckListItem truck={truck} />)
      } else {
        return (<div><h1>WAIT</h1></div>)
      }
    };

    return (
      <div>
        <header>
          <Navbar />
        </header>
        <section>
          { truckOrSpinner() }
        </section>
      </div>
    );
  }
}

export default TruckShowPage;
