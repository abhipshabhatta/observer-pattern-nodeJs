# Node.js RESTful API with Observer Pattern and SQLite Integration

This project demonstrates a simple RESTful API built with Node.js that implements the Observer Pattern. The API uses SQLite for persistent data storage, and the Observer Pattern is used to notify subscribers (observers) when a new resource is created.
## Features

- **Observer Pattern**:

  - Allows adding and notifying multiple subscribers when events occur (e.g., resource creation).
  - Examples of subscribers:
    - Logging data to the console.
    - Sending notifications.
    - Saving data to a SQLite database.

- **SQLite Integration**:
  - Persists resources into a lightweight SQLite database.
  - Includes endpoints to create and retrieve resources.

## Endpoints

### POST `/`

Create a new resource and notify all subscribers.

**Request Body**:

```json
{
	"name": "Resource Name",
	"createdAt": "2024-11-14T12:00:00Z"
}
```

## Response:

```json
{
	"message": "Resource created",
	"data": {
		"name": "Resource Name",
		"createdAt": "2024-11-14T12:00:00Z"
	}
}
```

## GET /

Retrieve all stored resources from the SQLite database.

```json
{
	"data": [
		{
			"id": 1,
			"name": "Resource Name",
			"createdAt": "2024-11-14T12:00:00Z"
		}
	]
}
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

## Project Structure

- index.js: Main server file defining API routes and registering subscribers.
- db.js: Initializes and manages the SQLite database.
- Subject.js: Implements the Observable (Subject) class.
- subscribers/: Contains various subscriber implementations (e.g., logging, notification, database logging).
