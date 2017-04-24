class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :rating_num, null: false
      t.integer :truck_id, null: false
      t.integer :user_id, null: false
      t.integer :review_id

      t.timestamps      
    end
  end
end
