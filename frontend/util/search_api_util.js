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
  console.log(result.results[0]);

});

// TO MAKE SEED PICS FOR USERS
// @user.avatar = File.open(###FILEPATH###)




// $.ajax(
//   { method: 'get',
//     url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
//     data: {
//       address: "159 W 25th St"
//     }
//   }
// ).then( result => {
//   this.state.lat = result.results[0].geometry.location.lat;
//   this.state.lng = result.results[0].geometry.location.lng;
//   this.state.zip_code = result.results[0].address_components[result.results[0].address_components.length - 1].long_name;
//   this.state.city = result.results[0].address_components[2].short_name;
// });
