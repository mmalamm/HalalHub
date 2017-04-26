json.extract! truck, :id, :name, :street_address, :zip_code, :city, :phone, :reviews, :accept_cc, :accept_phone_orders, :delivers
json.image_url asset_path(truck.profile_pic.url)
