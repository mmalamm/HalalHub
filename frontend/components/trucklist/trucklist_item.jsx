import React from 'react';

class TruckListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { truck } = this.props;
    return(
      <li>
        <div className="trucklist_item">
          {truck.name}
          <br />
          {truck.street_address}
          <br />
          {truck.city}, NY {truck.zip_code}
        </div>
      </li>
    );
  }
}

export default TruckListItem;
