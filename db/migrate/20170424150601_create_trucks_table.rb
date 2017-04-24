class CreateTrucksTable < ActiveRecord::Migration[5.0]
  def change
    create_table :trucks do |t|
      t.string :name, null: false, index: true
      t.string :street_address, null: false, index: true
      t.integer :zip_code, null: false, index: true
      t.string :city, null: false, index: true
      t.string :phone

      t.timestamps
    end
  end
end
