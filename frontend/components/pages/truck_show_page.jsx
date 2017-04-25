import React from 'react';
import Navbar from '../navbar/navbar_container';

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
        return (
          <div className="show-truck-page">
            <section className="show-page-header">
              <h1>
                {truck.name}
              </h1>
              <div>
                <button className="write-review-btn">★ Write a Review</button>
                <button className="add-photo-btn">Add Photo!</button>
              </div>
            </section>
            <div className="show-truck-content">
              <section className="show-truck-info">
                <div>
                  <strong>{truck.name}</strong> <br/>
                  {truck.street_address} <br/>
                  {truck.city}, NY {truck.zip_code}
                </div>
              </section>
              <section className="show-truck-images">
                <h2>images component will go here</h2>
              </section>
              <section className="show-truck-reviews">
                <h2>reviews will go here</h2>
              </section>
              <section className="show-truck-hours">
                <h2>hours component will go here</h2>
              </section>
            </div>
          </div>
        )
      } else {
        return (<div><h1>WAIT</h1></div>)
      }
    };

    return (
      <div className="show-page">
        <header>
          <Navbar />
        </header>
        { truckOrSpinner() }
      </div>
    );
  }
}

export default TruckShowPage;
