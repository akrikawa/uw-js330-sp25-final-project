# uw-js330-sp25-final-project
Final project for UW JSCRIPT 330 B Sp 25

## Project 
I'll be building a basic reservation system API that saves/stores a representation of a user's seat for an event.

## Problem 
I helped get a non-profit started with my wife Jennifer. It's called Vashon Opera. I have, for years, thought it would be nice to have our own ticketing / event registration system. While this final project would in no way meet that need, it will demonstrate the concepts of a reservation system, while meeting the requirements for the class final project.

## Technical components
This will be an Express API using a MongoDB to store data. I'll likely use Railway to host the data and application. This API will not call on an external API.

### Schema 
This is a first pass at the structure I think I'll need. I may end up making Venues and Seats separate, tying them together with a venueId. I haven't decided on indexes yet, but know that name for user will need a text index and reservations will need to be unique by their combined fields. _(REQ: Indexes for performance and uniqueness when reasonable)_
- **Venues:** _id, name, seats (an array of objects {_id, section, row, seat})
- **Events:** _id, name, startDateAndTime, venueId
- **Users:** _id, email, password, name
- **Reservations:** _id, userId, eventId, venueSeatId

### Routes
- **Users** /user _(REQ: Authentication and Authorization)_
  - Signup for account (/signup POST) [MVP]
  - Login to account (/login POST) [MVP]
- **Events** /event _(REQ: At least 2 sets of CRUD routes)_
  - Create event (/ POST)[MVP]
  - Delete event (/:id DEL) [MVP]
  - Update event (/:id PATCH)[MVP]
  - Get event by _id (/:id GET) [MVP]
  - Get all events (/ GET)
- **Reservations** _(REQ: At least 2 sets of CRUD routes)_
  - Make reservation (/ POST) [MVP]
  - Delete reservation (/:id DEL)[MVP]
  - Get all reservations by userId (route TBD) [MVP]
  - Get all reservations (/ GET) [MVP]
  - Search for reservations by user's name (route TBD) _(REQ: At least one of text search, aggregations, or lookups)_
  - Get a total of all reservations for a given eventId (route TBD) _(REQ: At least one of text search, aggregations, or lookups)_ 
- **Venues** 
  - Get venue by _id (/:id GET)
    - Note: This project won't include manipulating the venue via the Express API. I'll import some initial data to represent a venue and fixed seating. In some ways, this could be considered in alignment with  _(REQ: You may use external data providers...)_ and _(REQ: You may optionally find a data set to initially populate your database with)_.

### Daos
- **Users**
  - Create user
  - Get user by id
  - Get user by text search
  - Login 
- **Events**
  - Create event
  - Get all events
  - Get event by id
  - Update event by id
  - Delete event by id
- **Reservations**
  - Create reservation
  - Get all reservations
  - Get reservation by id
  - Get reservations by a set of ids
  - Delete reservation
- **Venues**
  - Get venue by id

## Business rules
This is an initial sketch for some rules.
  - A user should only be able to see their reservations.
  - A reservation can only be made for a venue's seat for a given event for a given user (no double booking)
  - To call any routes, a user must be authenticated.

## Timeline
### May 7 - 13:
- Set up initial project dependencies modeling in-class work and homework (Express, dotenv, bycrypt, etc.)
- Stub out folder structure for daos, routes, schema, tests
- Write schema files + decide on a structure for Venues (one or two collections)
- Establish 1-2 tests to ensure testing works
- Set up workflow for deployment

### May 14 - 20:
- Write one route per collection to get general idea working.
- Write all tests / rewrite business rules as greater understanding of problem emerges.
  - User tests
  - Events tests
  - Reservation tests
  - Venues tests

### May 21 - 27:
- Code project routes and DAOS against tests adapting scope where necessary to meet timeline.
- Build out suite of Postman calls (saved) for demo. _(REQ: Demonstrate how to interact with your API)_

### May 28 - June 2:
- Write up a very simple front-end that can call the routes, if time.
- Prepare notes and/or slides and code snippets to show for presentation.
- Practice presentation.
