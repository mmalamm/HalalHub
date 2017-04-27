$.ajax(
  { method: 'get',
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
    data: {
      address: "159 W 25th St"
    }
  }
).then( result => {
  console.log(`Latitude: ${result.results[0].geometry.location.lat}` );
  console.log(`Longitude: ${result.results[0].geometry.location.lng}` );
  console.log(`zip_code: ${result.results[0].address_components[7].long_name}` );
  console.log(`city: ${result.results[0].address_components[2].short_name}` );
});


$.ajax(
  { method: 'get',
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
    data: {
      address: "159 W 25th St"
    }
  }
).then( result => {
  this.state.lat = result.results[0].geometry.location.lat;
  this.state.lng = result.results[0].geometry.location.lng;
  this.state.zip_code = result.results[0].address_components[7].long_name;
  this.state.city = result.results[0].address_components[2].short_name;
});

this.state.lat = result.results[0].geometry.location.lat;
this.state.lng = result.results[0].geometry.location.lng;
this.state.zip_code = result.results[0].address_components[7].long_name;
this.state.city = result.results[0].address_components[2].short_name;
