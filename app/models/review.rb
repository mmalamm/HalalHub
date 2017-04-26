class Review < ApplicationRecord
  validates :user_id, :truck_id, presence: true
  validates :body, length:{ minimum: 5 }

  belongs_to :truck,
    class_name: "Truck",
    foreign_key: :truck_id,
    primary_key: :id

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

end
