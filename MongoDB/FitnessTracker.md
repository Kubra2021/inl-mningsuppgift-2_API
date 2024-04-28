Fitness Tracker API Documentation
The Fitness Tracker API allows users to manage their exercise data, including types of exercises, steps, distance, calories, and personal goals. This API provides endpoints for creating, updating, querying, and deleting fitness-related data.

Overview
API Base URL: https://lokalhost:3000/api

Authentication
The Fitness Tracker API does not require authentication. Anyone can access the API and retrieve or add data.

Resources

Users: Manages user accounts.
Exercise Types: Defines different types of exercises.
Steps: Records daily step counts for users.
Distance: Records daily distance covered by users.
Calories: Records daily calorie consumption for users.
Personal Goals: Manages personal fitness goals for users.
Available Endpoints

Users

GET /users: Retrieves all users.
Parameters: None
POST /users: Creates a new user.
Parameters:
username (string): The username of the new user.
email (string): The email address of the new user.
PUT /users/:id: Updates a specific user.
Parameters:
id (string): The ID of the user to update.
username (string, optional): The updated username.
email (string, optional): The updated email address.
DELETE /users/:id: Deletes a specific user.
Parameters:
id (string): The ID of the user to delete.

Exercise Types
GET /exercise-types: Retrieves all exercise types.
Parameters: None
POST /exercise-types: Creates a new exercise type.
Parameters:
name (string): The name of the new exercise type.
PUT /exercise-types/:id: Updates a specific exercise type.
Parameters:
id (string): The ID of the exercise type to update.
name (string, optional): The updated name of the exercise type.
DELETE /exercise-types/:id: Deletes a specific exercise type.
Parameters:
id (string): The ID of the exercise type to delete.

Steps
GET /steps: Retrieves all step records.
Parameters: None
POST /steps: Creates a new step record.
Parameters:
userId (string): The ID of the user.
date (string): The date of the step record.
count (integer): The number of steps.
PUT /steps/:id: Updates a specific step record.
Parameters:
id (string): The ID of the step record to update.
count (integer, optional): The updated number of steps.
DELETE /steps/:id: Deletes a specific step record.
Parameters:
id (string): The ID of the step record to delete.

Distance
GET /distance: Retrieves all distance records.
Parameters: None
POST /distance: Creates a new distance record.
Parameters:
userId (string): The ID of the user.
date (string): The date of the distance record.
value (float): The distance covered.
PUT /distance/:id: Updates a specific distance record.
Parameters:
id (string): The ID of the distance record to update.
value (float, optional): The updated distance covered.
DELETE /distance/:id: Deletes a specific distance record.
Parameters:
id (string): The ID of the distance record to delete.

Calories
GET /calories: Retrieves all calorie records.
Parameters: None
POST /calories: Creates a new calorie record.
Parameters:
userId (string): The ID of the user.
date (string): The date of the calorie record.
value (integer): The calorie consumption.
PUT /calories/:id: Updates a specific calorie record.
Parameters:
id (string): The ID of the calorie record to update.
value (integer, optional): The updated calorie consumption.
DELETE /calories/:id: Deletes a specific calorie record.
Parameters:
id (string): The ID of the calorie record to delete.

Personal Goals
GET /personal-goals: Retrieves all personal fitness goals.
Parameters: None
POST /personal-goals: Creates a new personal fitness goal.
Parameters:
userId (string): The ID of the user.
goalType (string): The type of goal (e.g., "steps", "distance", "calories").
value (integer): The target value for the goal.
PUT /personal-goals/:id: Updates a specific personal fitness goal.
Parameters:
id (string): The ID of the goal to update.
value (integer, optional): The updated target value for the goal.
DELETE /personal-goals/:id: Deletes a specific personal fitness goal.
Parameters:
id (string): The ID of the goal to delete.

Error Handling
400 Bad Request: Invalid request.
401 Unauthorized: Unauthorized access.
404 Not Found: Resource not found.
500 Internal Server Error: Server error.

Example Usage
Retrieve All Users

http://localhost:3000/api/users

 {
        "_id": "662e2b280781b5ee8d80ce8a",
        "username": "Magnus17",
        "email": "Stone21@gmail.com",
        "password": "XRVjnI520eZx9bT",
        "__v": 0
    },
    {
        "_id": "662e2b280781b5ee8d80ce8b",
        "username": "Adrianna21",
        "email": "Hellen.Grimes70@gmail.com",
        "password": "248ReRQ69NFNnTQ",
        "__v": 0
    },