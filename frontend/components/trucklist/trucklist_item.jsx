import React from 'react';

class TruckListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { truck } = this.props;
    return(
      <li>
        {truck.name}
      </li>
    );
  }
}

export default TruckListItem;
