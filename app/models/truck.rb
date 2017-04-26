class Truck < ApplicationRecord
  validates :name, :street_address, :zip_code, :city, presence: true

  # paperclip stuff
  has_attached_file :profile_pic, default_url: "halal_truck_pic.png"
  validates_attachment_content_type :profile_pic, content_type: /\Aimage\/.*\Z/

  # db associations
  has_many :reviews,
    class_name: "Review",
    foreign_key: :truck_id,
    primary_key: :id

end
