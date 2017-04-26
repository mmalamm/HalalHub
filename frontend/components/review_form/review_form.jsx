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
    // debugger
    const review = Object.assign({}, this.state, { truck_id: truckId });
    this.props.createReview(review);
    this.navigateToTruckShow();
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
      <form onSubmit={this.handleReviewSubmit}>


          Rating:
          <button onClick={this.updateRating(1)}>1</button>
          <button onClick={this.updateRating(2)}>2</button>
          <button onClick={this.updateRating(3)}>3</button>
          <button onClick={this.updateRating(4)}>4</button>
          <button onClick={this.updateRating(5)}>5</button>



        <br />
        <label>
          Your review
          <br />
          <textarea
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Your Review Here"></textarea>
        </label>

        <input type="submit" value="Create Review" />

      </form>
    );
  }
}

export default withRouter(TruckReviewForm);





// TRUCK ADDREVIEW FORM (REVIEWschema: body:text, user_id:int, truck_id:int, rating:int)
