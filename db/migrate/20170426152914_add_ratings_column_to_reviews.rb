class AddRatingsColumnToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :rating, :integer, null: false, default: 3
  end
end
