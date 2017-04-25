class Truck < ApplicationRecord
  validates :name, :street_address, :zip_code, :city, presence: true

  # db associations
  has_many :reviews,
    class_name: "Review",
    foreign_key: :truck_id,
    primary_key: :id

end
