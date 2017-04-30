json.extract! truck, :id, :name, :street_address, :zip_code, :city, :phone, :accept_cc, :accept_phone_orders, :delivers, :lat, :lng, :description
json.image_url asset_path(truck.profile_pic.url)
json.reviews truck.reviews do |review|
  json.extract! review, :id, :body, :rating
  json.author review.user.username
  json.image_url asset_path(review.user.avatar.url)
  json.timestamp review.updated_at
end
