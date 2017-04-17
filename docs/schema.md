# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
zip_code        | integer   |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## trucks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
address     | text      | not null
info        | text      |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
truck_id    | integer   | not null, foreign key (references trucks), indexed
rating      | integer   | not null
body        | text      |

## menu_items
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
price       | integer   | not null
truck_id    | integer   | not null, foreign key (references trucks), indexed

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
image_url   | string    | not null
truck_id    | integer   | not null, foreign key (references trucks), indexed
