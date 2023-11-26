# Frontend:

This is the frontend part of my, "Restaurant Reservation App". Crafted using React and Bootstrap. It provides a responsive and intuitive interface for managing restaurant reservations and table allocations.

## Features

- Dynamic UI for seamless reservation management.
- User-friendly controls for table assignments.
- Real-time updates to enhance user experience.

## Installation

1. Clone the repository.
2. Navigate to the frontend directory.
3. Run `npm install` to install dependencies.
4. Start the server using `npm start`.

# Frontend API Integration

The frontend of [Your Application Name] interacts with the backend server via a set of API calls. Below is the documentation of these API interactions.

## Base URL

The base URL for the API is defined in the frontend and is either taken from the `REACT_APP_API_BASE_URL` environment variable or defaults to `https://restaurant-reservations-capstone-b.onrender.com`.

## API Functions

### List Reservations
- **Function**: `listReservations(params, signal)`
- **Description**: Fetches all reservations from the backend. Can accept query parameters to filter reservations.
- **Parameters**:
  - `params`: Object containing query parameters.
  - `signal`: AbortController.signal to cancel the request.

### Create Reservation
- **Function**: `createReservation(reservation, signal)`
- **Description**: Creates a new reservation.
- **Parameters**:
  - `reservation`: Reservation object to be created.
  - `signal`: AbortController.signal to cancel the request.

### List Tables
- **Function**: `listTables(signal)`
- **Description**: Fetches all tables from the backend.
- **Parameters**:
  - `signal`: AbortController.signal to cancel the request.

(Continue with other functions like `createTable`, `readReservation`, `editReservation`, etc., following the same format.)

## Note
These functions are used throughout the frontend to communicate with the backend, handling different aspects of restaurant reservations and table management. They are designed to be asynchronous, returning promises that resolve to the data received from the API or errors in case of failed requests.
