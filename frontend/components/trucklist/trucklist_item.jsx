import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class TruckListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { truck } = this.props;
    let truckRating = _.mean(truck.reviews.map( review => review.rating ));
    truckRating = isNaN(truckRating) ? 0 : truckRating.toFixed(2);
    return(
      <li>
        <Link to={`/trucks/${truck.id}`}>
          <div className="trucklist_item">
            <img className="trucklist_item_icon" src={truck.image_url} />
            <div className="trucklist_item_info">
              <strong>{truck.name}</strong>
                <br />
              {truck.street_address}
                <br />
              {truck.city}, NY {truck.zip_code}
                <br />
              <span className="stars">
                ★ {truckRating || 'No Reviews Yet'}
              </span>
                &nbsp;
              <span className="num-reviews">
                {truck.reviews.length} Reviews
              </span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default TruckListItem;
