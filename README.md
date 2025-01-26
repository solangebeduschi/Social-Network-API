# Social-Network-API

# Description

The Social Network API is a backend application that enables users to share their thoughts, react to friends' thoughts, and manage a list of friends. Built with Node.js, Express.js, and MongoDB (using Mongoose), this API is designed to handle large amounts of unstructured data and provides robust functionality for managing user-generated content in a social media context.


# Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JavaScript (ES6+)

# Walkthrough Video

 Link: 

# Installation

Clone the repository:

git clone: git@github.com:solangebeduschi/Social-Network-API.git

Navigate to the project directory:

cd social-network-api

Install dependencies:

npm install

Ensure MongoDB is installed and running on your machine.

Start the application:

npm start

# Usage

Test the API using Insomnia or Postman. The API supports the following operations:

Creating, retrieving, updating, and deleting users.

Creating, retrieving, updating, and deleting thoughts.

Adding and removing friends from a user's friend list.

Adding and deleting reactions to thoughts.

API Endpoints

Users

Endpoints:

GET /api/users: Retrieve all users.

GET /api/users/:id: Retrieve a single user by ID, including their thoughts and friend list.

POST /api/users: Create a new user.

{
  "username": "exampleUser",
  "email": "user@example.com"
}

PUT /api/users/:id: Update a user by ID.

DELETE /api/users/:id: Delete a user by ID (removes associated thoughts as well).

Thoughts

Endpoints:

GET /api/thoughts: Retrieve all thoughts.

GET /api/thoughts/:id: Retrieve a single thought by ID.

POST /api/thoughts: Create a new thought and associate it with a user.

{
  "thoughtText": "This is an interesting thought!",
  "username": "exampleUser",
  "userId": "<user-id>"
}

PUT /api/thoughts/:id: Update a thought by ID.

DELETE /api/thoughts/:id: Delete a thought by ID.

Reactions

Endpoints:

POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

{
  "reactionBody": "Great thought!",
  "username": "anotherUser"
}

DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by ID.

Friends

Endpoints:

POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.

DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

# Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JavaScript (ES6+)


# License

This project is licensed under the MIT License. See the LICENSE file for details.

