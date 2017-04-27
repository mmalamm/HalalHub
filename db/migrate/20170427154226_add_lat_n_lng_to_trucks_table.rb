class AddLatNLngToTrucksTable < ActiveRecord::Migration[5.0]
  def change
    add_column :trucks, :lat, :float
    add_column :trucks, :lng, :float
  end
end
