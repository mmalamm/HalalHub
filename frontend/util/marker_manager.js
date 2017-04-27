

export default class MarkerManager {

  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(trucks){
    console.log('time to update');
    // const trucksObj = {};
    // trucks.forEach(truck => trucksObj[truck.id] = truck);
    //
    // trucks
    //   .filter(truck => !this.markers[truck.id])
    //   .forEach(newTruck => this.createMarkerFromTruck(newTruck, this.handleClick));
    //
    // Object.keys(this.markers)
    //   .filter(truckId => !trucksObj[truckId])
    //   .forEach((truckId) => this.removeMarker(this.markers[truckId]));
  }

  createMarkerFromTruck(truck) {
    const position = new google.maps.LatLng(truck.lat, truck.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      truckId: truck.id
    });

    marker.addListener('click', () => this.handleClick(truck));
    this.markers[marker.truckId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.truckId].setMap(null);
    delete this.markers[marker.truckId];
  }
}
