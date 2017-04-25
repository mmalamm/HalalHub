import React from 'react';
import { Link } from 'react-router';

class TruckListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { truck } = this.props;
    return(
      <li>
        <Link to={`/trucks/${truck.id}`}>
          <div
          className="trucklist_item">
          {truck.name}
          <br />
          {truck.street_address}
          <br />
          {truck.city}, NY {truck.zip_code}
          <br />
          <img src={truck.image_url} />
          </div>
        </Link>
      </li>
    );
  }
}

export default TruckListItem;
