json.extract! truck, :id, :name, :street_address, :zip_code, :city, :phone
json.image_url asset_path(truck.profile_pic.url)
