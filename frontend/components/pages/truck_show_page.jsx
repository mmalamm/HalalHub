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

    const truckReviewForm = () => {
      if (truck) {
        return(
          <form>
            <label>
              Your review
              <br />
              <textarea placeholder="Your Review Here"></textarea>
            </label>
          </form>
        )
      }
    };

    const truckReviews = () => {
      if (truck) {
        return(truck.reviews.map(review => {
          return (
            <article key={review.id} className="single-truck-review">
              <strong>{review.user_id}</strong>
              <br />
              {review.body}
            </article>
          );
        }));
      } else {
        return (<h1>WAIT</h1>);
      }
    };

    const truckOrSpinner = () => {
      if (truck) {
        return (
          <div className="show-truck-page">
            <header className="show-page-header">
              <h1>
                {truck.name}
              </h1>
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
