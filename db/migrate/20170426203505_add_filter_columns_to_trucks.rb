class AddFilterColumnsToTrucks < ActiveRecord::Migration[5.0]
  def change
    add_column :trucks, :accept_cc, :boolean, default: false
    add_column :trucks, :accept_phone_orders, :boolean, default: false
    add_column :trucks, :delivers, :boolean, default: false
  end
end
