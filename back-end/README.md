# Backend:

This is the frontend part of my, "Restaurant Reservation App" which is built with Node.js and Express, offering a robust API for the seamless handling of restaurant reservations and table management.



## Features

- Comprehensive API endpoints for reservations and table management.
- Secure request processing with validation and error handling.

## Installation

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `npm install` to install dependencies.
4. Start the server using `npm start`.

## API Documentation

This section details the API endpoints provided by [Your Application Name] for managing restaurant reservations and tables.

## Base URL

The base URL for all API requests is `https://restaurant-reservations-capstone-b.onrender.com`.

## Endpoints

### List Reservations
- **Endpoint**: `/reservations`
- **Method**: `GET`
- **Description**: Retrieves all existing reservations.
- **Query Parameters**: 
  - `date`: The date to filter reservations (optional).
- **Returns**: An array of reservation objects.

### Create Reservation
- **Endpoint**: `/reservations`
- **Method**: `POST`
- **Description**: Posts a new reservation to the reservations page.
- **Body**: Reservation object.
- **Returns**: The created reservation object.

### List Tables
- **Endpoint**: `/tables`
- **Method**: `GET`
- **Description**: Returns all tables.
- **Returns**: An array of table objects.

### Create Table
- **Endpoint**: `/tables`
- **Method**: `POST`
- **Description**: Posts a new table to the tables page.
- **Body**: Table object.
- **Returns**: The created table object.

### Read Reservation
- **Endpoint**: `/reservations/:reservationId`
- **Method**: `GET`
- **Description**: Retrieves a reservation by its ID.
- **URL Parameters**:
  - `reservationId`: The ID of the reservation.
- **Returns**: The reservation object.

### Edit Reservation
- **Endpoint**: `/reservations/:reservationId`
- **Method**: `PUT`
- **Description**: Updates data for a given reservation.
- **URL Parameters**:
  - `reservationId`: The ID of the reservation to update.
- **Body**: Updated reservation object.
- **Returns**: The updated reservation object.

### Update Reservation Status
- **Endpoint**: `/reservations/:reservationId/status`
- **Method**: `PUT`
- **Description**: Updates the status of a reservation.
- **URL Parameters**:
  - `reservationId`: The ID of the reservation to update.
- **Body**: Status update object.
- **Returns**: The updated reservation object.

### Finish Table
- **Endpoint**: `/tables/:tableId/seat`
- **Method**: `DELETE`
- **Description**: Removes a table from the seating page.
- **URL Parameters**:
  - `tableId`: The ID of the table to finish.
- **Returns**: Confirmation of the operation.

### Seat Table
- **Endpoint**: `/tables/:tableId/seat`
- **Method**: `PUT`
- **Description**: Updates the table status and displays it in the tables list.
- **URL Parameters**:
  - `tableId`: The ID of the table to update.
- **Body**: Reservation ID for seating.
- **Returns**: Confirmation of the operation.

