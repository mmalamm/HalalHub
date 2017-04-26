import React from 'react';
import { withRouter } from 'react-router';

class TruckReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 3, body: "" };

    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    this.navigateToTruckShow = this.navigateToTruckShow.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  navigateToTruckShow() {
    this.props.router.push(`/trucks/${this.props.params.id}`);
  }

  handleReviewSubmit(e) {
    e.preventDefault();
    const truckId = parseInt(this.props.params.id);
    const review = Object.assign({}, this.state, { truck_id: truckId });
    this.props.createReview(review);
    this.navigateToTruckShow();
    this.setState({ rating: 1, body: ''});
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateRating(val) {

    return e => {
      e.preventDefault();
      this.setState({ rating: val });
    };
  }

  render() {
    return(
      <div className="review-form">
        <form onSubmit={this.handleReviewSubmit}>

          <div className="rating-input">
            Rating:&nbsp;
            <button onClick={this.updateRating(1)}>★</button>
            <button onClick={this.updateRating(2)}>★</button>
            <button onClick={this.updateRating(3)}>★</button>
            <button onClick={this.updateRating(4)}>★</button>
            <button onClick={this.updateRating(5)}>★</button>
          </div>

          <br />

          <label className="body-txtarea">
            Your review
            <br />
            <textarea
              value={this.state.body}
              onChange={this.update("body")}
              placeholder="Your Review Here"></textarea>
          </label>

          <input type="submit" value="Create Review" />

        </form>
      </div>
    );
  }
}

export default withRouter(TruckReviewForm);
