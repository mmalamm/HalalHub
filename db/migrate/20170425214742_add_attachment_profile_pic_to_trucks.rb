class AddAttachmentProfilePicToTrucks < ActiveRecord::Migration
  def self.up
    change_table :trucks do |t|
      t.attachment :profile_pic
    end
  end

  def self.down
    remove_attachment :trucks, :profile_pic
  end
end
