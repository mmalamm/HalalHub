class Truck < ApplicationRecord
  validates :name, :street_address, :zip_code, :city, null: false

  # db associations
  
end
