import React from 'react';


import TruckMap from '../truck_map/truck_map';
import Navbar from '../navbar/navbar_container';
import TruckList from '../trucklist/trucklist_container';

import TruckIndex from './truck_index';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

      mapOptions: {
        center: {lat: 40.7309907, lng: -73.8672127},
        zoom: 10
      }
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }


  handleSearchSubmit(e) {
    e.preventDefault();
    let addressString = e.currentTarget.firstChild.value;
    $.ajax(
      { method: 'get',
        url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
        data: {
          address: addressString
        }
      }
    ).then(result =>{
      const mapOptions = { center: {}, zoom: 10 };

      mapOptions.center.lat = result.results[0].geometry.location.lat;
      mapOptions.center.lng = result.results[0].geometry.location.lng;
      mapOptions.zoom = 15;
      this.setState({mapOptions: mapOptions});
    });
  }

  render() {


    return(
  <div>
    <header>
      <Navbar handleSearchSubmit={this.handleSearchSubmit}/>
    </header>
    <div className="search-page">
      <div className="main-map">
        <TruckMap
          mapOptions={this.state.mapOptions}
          trucks={this.props.trucks}
          updateFilter={this.props.updateFilter}
          singleTruck={false} />
      </div>
      <div className="trucklist">
        <TruckList trucks={this.props.trucks} />
      </div>
    </div>
  </div>
);
}
}

export default Search;
