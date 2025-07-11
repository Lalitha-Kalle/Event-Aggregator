## Event Aggregation for College Students 
### V1
  ### Roles - 
  - User
    - signup/login
    - View upcoming events
    - Click "I'm Interested"
  - Admin
    - signup/login
    - create/update/delete events
    - view total "interested" users per event

  ### DB Models 
  - User 
    - name
    - email
    - password
    - role
    - interestedEvents
  - Admin
    - name
    - email 
    - password
    - role
    - createdAt
  - Events
    - id
    - title
    - description
    - date
    - location
    - interestedUsers
    - createdAt
    - updatedAt

  ### API Endpoints
  - Users - (authenticated)
    - Login /auth/login
    - Get all events - /events
    - Mark Interest for event - /events/:id/interested

  - Admin - 
    - Post an event -> POST /events
    - Update an event -> PUT /events/:id
    - Delete an event -> DELETE /events/:id
    - Get all interested students -> GET /events/:eventId/interested
