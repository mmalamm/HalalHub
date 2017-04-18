# HalalHub

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/

## Minimum Viable Product

HalalHub is a web application using Ruby on Rails on the backend API and
React/Redux architecture for the frontend. By the end of Week 9, this app will,
at a minimum, satisfy the following criteria with a tight codebase lacking
bugs and unnecessary inefficiencies, adequate seed data and CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Business Page (Truck Show Page)
- [ ] Search / filters (Search)
- [ ] Reviews / ratings (Reviews)
- [ ] Map
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Trucks Model, Images table, API, and components (2 days)

**Objective:** Trucks can be created, read, edited and destroyed through
the API. Images can be added to truck pages by users.

### Phase 3: Reviews and Ratings (2 days)

**Objective:** Reviews can be created, read, edited and destroyed through the API.
Ratings can be added by users and will update the truck's overall rating

### Phase 4: Map Functionalities (1 day)

**Objective:** Add google maps functionality to truck show page and index page.

### Phase 5: Add search and filters

**Objective:** Allow users to search and filter by critera TBD.

### Bonus Features (TBD)
- [ ] Mark reviews funny, cool, useful etc.
- [ ] User profiles and favorite trucks
- [ ] Users can add friends
