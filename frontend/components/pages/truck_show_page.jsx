import React from 'react';
import Navbar from '../navbar/navbar_container';
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

  handleReviewSubmit(e) {
    e.preventDefault();


  }

  render() {
    const { truck } = this.props;

    //// TRUCK REVIEWS (PART OF TRUCK SHOW PAGE)
    const truckReviews = () => {
      if (truck) {
        return(truck.reviews.map(review => {
          return (
            <article key={review.id} className="single-truck-review">
              <strong>User ID: {review.user_id}</strong>
              <br />
              <strong>Rating:</strong> {review.rating}
              <br />
              <strong>Body:</strong> {review.body}
            </article>
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
                <p>{_.mean(truck.reviews.map( review => review.rating ))}</p>
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
                </div>
              </summary>


              <section className="truck-contributions">
                <section className="show-truck-images">
                  Images component will go here.
                </section>
                <section className="show-truck-reviews">
                  { truckReviews() }
                  <TruckReviewForm />
                </section>
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
          <Navbar />
        </header>
        { truckOrSpinner() }
      </div>
    );
  }
}

export default TruckShowPage;
