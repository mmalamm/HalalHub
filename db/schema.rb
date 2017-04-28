# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170428044826) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.text     "body",                   null: false
    t.integer  "user_id",                null: false
    t.integer  "truck_id",               null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "rating",     default: 3, null: false
  end

  create_table "trucks", force: :cascade do |t|
    t.string   "name",                                     null: false
    t.string   "street_address",                           null: false
    t.integer  "zip_code",                                 null: false
    t.string   "city",                                     null: false
    t.string   "phone"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.string   "profile_pic_file_name"
    t.string   "profile_pic_content_type"
    t.integer  "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
    t.boolean  "accept_cc",                default: false
    t.boolean  "accept_phone_orders",      default: false
    t.boolean  "delivers",                 default: false
    t.float    "lat"
    t.float    "lng"
    t.index ["city"], name: "index_trucks_on_city", using: :btree
    t.index ["name"], name: "index_trucks_on_name", using: :btree
    t.index ["street_address"], name: "index_trucks_on_street_address", using: :btree
    t.index ["zip_code"], name: "index_trucks_on_zip_code", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "session_token",       null: false
    t.string   "pw_digest",           null: false
    t.integer  "zip_code"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "email"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
