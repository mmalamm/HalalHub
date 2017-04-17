# HalalHub

<p style="text-align: center;">![HalalHub Logo](/docs/halalhub-logo.png)</p>

Today, the Halal Truck in New York city is as iconic as the Hot Dog Stand was in the 80's. HalalHub is a full-stack web application inspired by Yelp which seeks to create a repository of information regarding the many Halal trucks around New York City. It uses a Ruby on Rails API on the backend with a PostgreSQL database, and React/Redux architectural framework on the frontend.

## Features & Implementation

The PostgreSQL database of HalalHub consists of four tables: users, trucks, reviews, and menu_items. Users are indexed by unique usernames, and have columns for email, password digest, session token and zip code, for easier access to nearby halal trucks.

![Sign In Page](/docs/wireframes/sign-in-page.png)
![Sign Up Page](/docs/wireframes/sign-up-page.png)

### Truck Show Page Rendering

Trucks are stored in a table with columns for name, address, and a text area for any additional information. The truck show page consists of a container with props being passed down for the truck information component, the images component, reviews component, and operating hours component.

![Truck Show Page](/docs/wireframes/truck-show-page.png)

### Adding Reviews

Reviews are added by users via a review form container on the review form page. The review form page also includes a reviews component (re-used from truck show page) to render reviews by other users for the same truck.

![Review Form Page](/docs/wireframes/review-form.png)

### Menu Items

Since most halal trucks tend to have the same menu items, it would be necessary to store menu_items in their own join table, so as not to repeat 'Chicken over Rice' on virtually every truck. Menu Items also have a price column on their table. Menu Items are added on the same page as the trucks they belong to. The add truck page consists of two form containers: one to add the truck, and the other to add the truck's menu items.

![Add Truck Page](/docs/wireframes/add-truck-page.png)


### Index / Home Page

The HalalHub homepage consists of a map functional component and a truck list containers which renders a list of truck list items (halal trucks). Just about every page contains the searchbar/login component at the top of the page.

![Index/Homepage](/docs/wireframes/index-home-page.png)

## Future Directions for the Project

In addition to reviews, I plan to implement a User's profile page, where users can store a list of favorite trucks, have access to all their reviews and submitted photos, and add and remove friends, who are other users of the application.
