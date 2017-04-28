import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

// let _mapOptions = {
//   center: {lat: 40.7309907, lng: -73.8672127},
//   zoom: 10
// };

class TruckMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.props.mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singleTruck) {
      this.props.fetchTruck(this.props.truckId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.trucks);
    }
  }

  componentDidUpdate() {
    if(this.props.singleTruck){
      this.MarkerManager.updateMarkers([this.props.trucks[Object.keys(this.props.trucks)[0]]]);
    } else {
      this.MarkerManager.updateMarkers(this.props.trucks);
    }
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (this.props.mapOptions.center.lat !== newProps.mapOptions.center.lat || this.props.mapOptions.center.lng !== newProps.mapOptions.center.lng) {
      this.map.panTo(newProps.mapOptions.center);
      this.map.setZoom(newProps.mapOptions.zoom);
    }
  }
  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWst: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  _handleMarkerClick(truck) {
    this.props.router.push(`trucks/${truck.id}`);
  }

  render() {
    return <div id="map-container" ref="map">Map</div>;
  }
}

export default withRouter(TruckMap);
