# PAY_NOW App

PAY_NOW is a basic version of a payment application built with React for the frontend and MongoDB for the backend. It provides essential features like user authentication, profile management, and secure money transfers between users.

## Features

1. User Authentication
   - Sign up: New users can create an account.
   - Sign in: Existing users can log into their accounts.

2. Dashboard
   - Profile Management: Users can update their username and password.
   - Balance Display: Users can view their current account balance.

3. User Search
   - Search functionality to find other users registered on the platform.

4. Money Transfer
   - Send money to other users securely.
   - Implements the Atomicity concept for transactions in the backend.

## Technical Stack

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB

## Key Implementations

### User Authentication
- Secure signup and signin processes.
- Password hashing for enhanced security.

### Profile Management
- Endpoints for updating user information.
- Secure password change functionality.

### Transaction Atomicity
- Implemented using MongoDB transactions.
- Ensures that money transfers are either completed fully or not at all, maintaining data integrity.

### User Search
- Efficient user search functionality to easily find recipients for money transfers.

## Getting Started

1. Clone the repository
2. And Install all the Packages and run it locally.
