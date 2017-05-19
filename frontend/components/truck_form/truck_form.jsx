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
      delivers: false,
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  updateFilter(property, bool) {
    return e => {
      e.preventDefault();
      this.setState({ [property]: bool });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const truck = Object.assign({}, this.state);


    $.ajax(
      { method: 'get',
        url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
        data: {
          address: `${truck.street_address} ${truck.city}`
        }
      }
    ).then( result => {
      const comps = result.results[0].address_components;
      const loc = result.results[0].geometry.location;
      truck.lat = loc.lat;
      truck.lng = loc.lng;
      truck.zip_code = comps[comps.length - 1].long_name;
      truck.city = comps[2].short_name;
      this.props.createTruck(truck);
    }).then(() => this.props.router.push('/'));
  }

  render() {
    return(
      <div>
        <header className="form-header">
          <Navbar id="form-header"/>
        </header>
        <form className="truck-form" onSubmit={ this.handleSubmit }>
          <h1>Add New Truck</h1>
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
          <label>Boro:
            <br />
            <input
              ref="city"
              value={ this.state.city }
              placeholder="Enter truck boro"
              onChange={ this.update('city') }
              />
          </label>
          <br />

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

              <label>Description:
                <br />
                <textarea
                  placeholder="Enter description (e.g. Turkish Style Halal food served here, etc.)"
                  onChange={ this.update('description') }
                  ref="description">
                  { this.state.description || '' }
                </textarea>
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
              Accepts Phone Orders?
                <br />
                <button onClick={ this.updateFilter("accept_phone_orders", true)}>Yes</button>
                <button onClick={ this.updateFilter("accept_phone_orders", false)}>No</button>
                {this.state.accept_phone_orders ? "Yes" : "No"}

              <br />

              Accepts Credit Cards?
                <br />
                <button onClick={ this.updateFilter("accept_cc", true)}>Yes</button>
                <button onClick={ this.updateFilter("accept_cc", false)}>No</button>
                {this.state.accept_cc ? "Yes" : "No"}

              <br />

              Delivers?
                <br />
                  <button onClick={ this.updateFilter("delivers", true)}>Yes</button>
                  <button onClick={ this.updateFilter("delivers", false)}>No</button>
                {this.state.delivers ? "Yes" : "No"}

              <br />
            </div>

          <input type="submit" value="Add Truck!"/>
        </form>
      </div>
    );
  }
}

export default TruckForm;
