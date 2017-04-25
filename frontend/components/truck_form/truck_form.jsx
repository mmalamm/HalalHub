import React from 'react';
import { Link } from 'react-router';

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street_address: '',
      zip_code: 10001,
      city: '',
      phone: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const truck = Object.assign({}, this.state);
    this.props.createTruck(truck).then(() => this.props.router.push('/'));
  }

  // renderErrors() {
  //   debugger
  //   let errors = this.props.errors;
  //   if (errors.length){
  //     return(
  //       <ul className="errors">
  //         {this.props.errors.map((error, i) => (
  //           <li key={`error-${i}`}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  render() {
    return(
      <div className="main">
        <div className="logo-decal">
          <Link to="/">
            <img src={window.halalhubsvg} />
          </Link>
        </div>
        <form className="truck-form" onSubmit={ this.handleSubmit }>
          <label>Name:
            <input
              ref="name"
              value={ this.state.title }
              placeholder="Enter truck name"
              onChange={ this.update('name') }
              />
          </label>
          <label>Address:
            <input
              ref="street_address"
              value={ this.state.street_address }
              placeholder="Enter truck address"
              onChange={ this.update('street_address') }
              />
          </label>
          <label>City:
            <input
              ref="city"
              value={ this.state.city }
              placeholder="Enter truck city"
              onChange={ this.update('city') }
              />
          </label>
          <label>Zip Code:
            <input
              ref="zip_code"
              value={ this.state.zip_code }
              placeholder="Enter zip code"
              onChange={ this.update('zip_code') }
              />
          </label>
          <label>Phone:
            <input
              ref="phone"
              value={ this.state.phone || '' }
              placeholder="Phone #"
              onChange={ this.update('phone') }
              />
          </label>
          <input type="submit" value="Add Truck!"/>
        </form>
      </div>
    );
  }
}

export default TruckForm;
