# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Truck.delete_all
User.delete_all
Review.delete_all
# Truck schema:
#


zip_codes = [10001, 10011, 10018, 10019, 10020, 10036, 10004, 10005, 10006, 10007, 10038, 10280, 11004, 11005, 11411, 11413, 11422, 11426, 11427, 11428, 11429, 11365, 11366, 11367, 12012, 11205, 11215, 11217, 11231, 11220, 11232, 10306, 10307, 10308, 10309, 10312]

24.times do
  ussr = User.create({
    username: Faker::Internet.user_name(5..17),
    password: 'password',
    email: Faker::Internet.safe_email,
    zip_code: zip_codes.sample
    })
end

User.all.each.with_index do |user, idx|
  user.avatar= File.open("app/assets/images/avatars/images-#{idx + 1}.jpg")
  user.save!
end

trucksObj = {
"18": {
"name": "Haseeb's Wholesome Halal",
"street_address": "59th st & 8th Ave",
"zip_code": 10014,
"city": "Manhattan",
"phone": "212 555 9843",
"accept_cc": true,
"accept_phone_orders": true,
"delivers": false,
"lat": 40.7404913,
"lng": -74.0026706
},
"19": {
"name": "Floral Park Halal",
"street_address": "jamaica ave & tulip ave",
"zip_code": 11001,
"city": "Floral Park",
"phone": "718 555 4365",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7272142,
"lng": -73.7102645
},
"20": {
"name": "Shohaib Truck Food",
"street_address": "Avenue J & Flatbush Ave",
"zip_code": 11226,
"city": "Flatbush - Ditmas Park",
"phone": "646 555 8872",
"accept_cc": true,
"accept_phone_orders": true,
"delivers": false,
"lat": 40.6507752,
"lng": -73.958669
},
"21": {
"name": "Crazy Cool Halal Truck",
"street_address": "King's Hwy & Stillwell Ave",
"zip_code": 11214,
"city": "Brooklyn",
"phone": "718 555 8372",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.6060365,
"lng": -73.9870319
},
"22": {
"name": "Ahmed's Halal",
"street_address": "crocheron ave & 191st st",
"zip_code": 11358,
"city": "Queens",
"phone": "718 555 3232",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7634758,
"lng": -73.7910877
},
"23": {
"name": "Kazi's Halal Truck",
"street_address": "Pitkin Ave & 87th St",
"zip_code": 11417,
"city": "Queens",
"phone": "718 555 9652",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.6744458,
"lng": -73.8493773
},
"24": {
"name": "Ashiq Chicken and Rice",
"street_address": "34th Ave and 75th St",
"zip_code": 11372,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7530916,
"lng": -73.8915532
},
"25": {
"name": "Andrew's Lamb and Chicken Truck",
"street_address": "143-51 Roosevelt Ave",
"zip_code": 11354,
"city": "Flushing",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7616248,
"lng": -73.8230022
},
"26": {
"name": "Jasmin's Healthy Halal",
"street_address": "northern blvd & 149th st",
"zip_code": 11354,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7653129,
"lng": -73.8173139
},
"27": {
"name": "Charlie's Chicken & Rice",
"street_address": "E Fordhan Rd & walton Ave",
"zip_code": 10468,
"city": "Bronx",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.8624829,
"lng": -73.9002925
},
"28": {
"name": "King Falafel and Chicken",
"street_address": "Prospect Ave and Southern blvd",
"zip_code": 10455,
"city": "Bronx",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.8118107,
"lng": -73.9046793
},
"29": {
"name": "Harold's Halal Hangout",
"street_address": "159 w25th St",
"zip_code": 10001,
"city": "Manhattan",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7452798,
"lng": -73.9939503
},
"30": {
"name": "Halal Guys",
"street_address": "59th st and 5th ave",
"zip_code": 10022,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": true,
"delivers": false,
"lat": 40.7642832,
"lng": -73.9730166
},
"31": {
"name": "Harlem Halal",
"street_address": "127th st and malcolm x blvd ",
"zip_code": 10027,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.8090372,
"lng": -73.9444606
},
"32": {
"name": "Central Park Halal Truck",
"street_address": "Central Park West & W 86th St",
"zip_code": 10024,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7852883,
"lng": -73.96935
},
"33": {
"name": "Soho Rafiqi Halal",
"street_address": "E houston St and Avenue B",
"zip_code": 10009,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7215427,
"lng": -73.9837991
},
"34": {
"name": "Homer's Halal Heaven",
"street_address": "broadway and worth",
"zip_code": 10013,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7162848,
"lng": -74.0045363
},
"35": {
"name": "Woodbine Halal",
"street_address": "woodbine and forest",
"zip_code": 11385,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7064204,
"lng": -73.9028176
},
"36": {
"name": "Hillside Halal",
"street_address": "hillside & merrick",
"zip_code": 11432,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.709494,
"lng": -73.7963803
},
"37": {
"name": "Parson's Halal Eatery",
"street_address": "hillside & parsons",
"zip_code": 11432,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7076688,
"lng": -73.8027647
},
"38": {
"name": "canarsie halal truck",
"street_address": "remsen & flatlands",
"zip_code": 11236,
"city": "Brooklyn",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.6401687,
"lng": -73.9059909
},
"39": {
"name": "FiDi halal",
"street_address": "Exchange Pl & Broad St",
"zip_code": 10004,
"city": "New York",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7062727,
"lng": -74.0112033
},
"40": {
"name": "Rakin's Rockin Halal",
"street_address": "Woodhaven Blvd & Rockaway Blvd",
"zip_code": 11417,
"city": "Queens",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.6806565,
"lng": -73.8445353
},
"41": {
"name": "Flatbush Halal",
"street_address": "Avenue N & Flatbush",
"zip_code": 11234,
"city": "Brooklyn",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.6185782,
"lng": -73.9324701
},
"42": {
"name": "Hipster Halal",
"street_address": "Division Ave & Lee Ave",
"zip_code": 11211,
"city": "Brooklyn",
"phone": "",
"accept_cc": false,
"accept_phone_orders": false,
"delivers": false,
"lat": 40.7075928,
"lng": -73.9618883
}
}

trucks = trucksObj.values

Truck.create(trucks)

Truck.all.each.with_index do |truck, idx|
  truck.description = "Testtting" + Faker::Hipster.paragraph
  parth = "app/assets/images/truck_profile_pics/images-#{idx + 1}.jpg"
  truck.profile_pic= File.open(parth)
  truck.save!
end


userIds = User.all.map{ |user| user.id }
truckIds = Truck.all.map{ |truck| truck.id }
ratings = [3,4,4,4,4,4,5,5,5]

150.times do
  Review.create({
    body: Faker::Hipster.paragraph,
    user_id: userIds.sample,
    truck_id: truckIds.sample,
    rating: ratings.sample
  })
end
