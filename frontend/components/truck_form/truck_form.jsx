import React from 'react';
import { Link } from 'react-router';
import Navbar from '../navbar/navbar_container';

class TruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      street_address: '',
      zip_code: 10001,
      city: '',
      phone: null,
      accept_cc: false,
      accept_phone_orders: false,
      delivers: false
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

  render() {
    debugger
    return(
      <div>
        <header className="form-header">
          <Navbar id="form-header"/>
        </header>
        <form className="truck-form" onSubmit={ this.handleSubmit }>
          <label>Name:
            <br />
            <input
              ref="name"
              value={ this.state.title }
              placeholder="Enter truck name"
              onChange={ this.update('name') }
              />
          </label>
          <br />
          <label>Address:
            <br />
            <input
              ref="street_address"
              value={ this.state.street_address }
              placeholder="Enter truck address"
              onChange={ this.update('street_address') }
              />
          </label>
          <br />
          <label>City:
            <br />
            <input
              ref="city"
              value={ this.state.city }
              placeholder="Enter truck city"
              onChange={ this.update('city') }
              />
          </label>
          <br />
          <label>Zip Code:
            <br />
            <input
              ref="zip_code"
              value={ this.state.zip_code }
              placeholder="Enter zip code"
              onChange={ this.update('zip_code') }
              />
          </label>
          <br />
          <label>Phone:
            <br />
            <input
              ref="phone"
              value={ this.state.phone || '' }
              placeholder="Phone #"
              onChange={ this.update('phone') }
              />
          </label>
          <br />
          <label>Picture:
            <br />
            <input
              ref="profile_pic"

              placeholder="Upload Profile Pic"
              onChange={ this.update('profile_pic') }
              />
          </label>
          <br />


          <label>Picture:
            <br />
            <input
              ref="profile_pic"

              placeholder="Upload Profile Pic"
              onChange={ this.update('profile_pic') }
              />
          </label>
          <br />

          <div className="filter-options">
            <label>Accepts Phone Orders?
              <br />
              <button>Yes</button>
              <button>No</button>
              {this.state.accept_phone_orders ? "Yes" : "No"}
            </label>
            <br />

            <label>Accepts Credit Cards?
              <br />
              <button>Yes</button>
              <button>No</button>
              {this.state.accept_cc ? "Yes" : "No"}
            </label>
            <br />

            <label>Delivers?
              <br />
              <button>Yes</button>
              <button>No</button>
              {this.state.delivers ? "Yes" : "No"}
            </label>
            <br />
          </div>

          <input type="submit" value="Add Truck!"/>
        </form>
      </div>
    );
  }
}

export default TruckForm;
