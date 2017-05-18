import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import _ from 'lodash';

///////
import TruckReviewForm from '../review_form/review_form_container.jsx';
///////



class TruckShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 3,
      body: ''
    };
  }

  componentDidMount() {
    this.props.fetchTruck(this.props.params.id);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    // ### redirect to indexpage with the e's currentTarget.firstChild.value producing mapOptions via ajax request and then push those props to the indexpage components
  }

  render() {
    const { truck } = this.props;
    //// TRUCK REVIEWS (PART OF TRUCK SHOW PAGE)
    const truckReviews = () => {
      if (truck) {
        return(truck.reviews.map(review => {
          let timeStamp = new Date(Date.parse(review.timestamp));
          return (
            <li key={review.id} className="single-truck-review">
              <img src={review.image_url} />
              <div>
                <strong>Rating:</strong> {review.rating}
                  <br />
                  <strong><span className="username">{review.author}</span> said</strong> {review.body}
                  <br /><strong>On {timeStamp.toDateString()+ ' at ' + timeStamp.toLocaleTimeString()}</strong>
              </div>
            </li>
          );
        }));
      } else {
        return (<h1>WAIT</h1>);
      }
    };

    //// TRUCK INFO OR SPINNER ///////
    const truckOrSpinner = () => {
      if (truck) {
        return (
          <div className="show-truck-page">
            <header className="show-page-header">
              <div>
                <h1>
                  {truck.name}
                </h1>
                <p className="stars">{_.mean(truck.reviews.map( review => review.rating )) || 0}</p>
              </div>
              <div>
                <button className="write-review-btn">★ Write a Review</button>
                <button className="add-photo-btn">Add Photo!</button>
              </div>
            </header>

            <div className="show-truck-content">

              <summary className="show-truck-info">
                <div>
                  <img src={truck.image_url} />
                  <div className="address">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    <div>
                      <strong>{truck.name}</strong> <br/>
                      {truck.street_address} <br/>
                      {truck.city}, NY {truck.zip_code}
                    </div>
                  </div>
                  <div className="filters">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                    <div>
                      <strong>More Truck Info</strong>
                      <br />
                      Accepts Credit Card?&nbsp;
                      <strong>{ truck.accept_cc ? "Yes" : "No" }</strong>
                      <br />
                      Accepts Phone Orders?&nbsp;
                      <strong>{ truck.accept_phone_orders ? "Yes" : "No" }</strong>
                      <br />
                      Delivers?&nbsp;
                      <strong>{ truck.delivers ? "Yes" : "No" }</strong>
                    </div>
                  </div>
                  <div className="filters">
                    <i className="fa fa-cutlery" aria-hidden="true"></i>
                    <div>
                      <strong>Description: </strong>
                      <br />
                      { truck.description }
                    </div>
                  </div>
                </div>
              </summary>

              <section className="truck-contributions">
                <section className="show-truck-images">
                  Images component will go here.
                </section>
                <TruckReviewForm />
                <ul className="show-truck-reviews">
                  { truckReviews() }
                </ul>
              </section>

            </div>

          </div>
        );
      } else {
        return (<h1>WAIT</h1>);
      }
    };

    return (
      <div className="show-page">
        <header>
          <NavbarContainer handleSearchSubmit={this.handleSearchSubmit}/>
        </header>
        { truckOrSpinner() }
      </div>
    );
  }
}

export default TruckShowPage;
