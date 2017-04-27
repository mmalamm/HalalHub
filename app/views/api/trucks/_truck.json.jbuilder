json.extract! truck, :id, :name, :street_address, :zip_code, :city, :phone, :accept_cc, :accept_phone_orders, :delivers
json.image_url asset_path(truck.profile_pic.url)
json.reviews truck.reviews do |review|
  json.extract! review, :id, :body, :rating
  json.extract! review.user, :username
end
