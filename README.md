# Task Management System

A modern full-stack task management application built with .NET Core, featuring secure authentication and robust database design.

## Current Implementation

### Authentication System
- User registration with email and password
- Secure login with JWT token generation
- Password hashing using BCrypt
- Input validation and error handling

### Database Structure
- Users table with secure password storage
- Tasks table with relationships to users
- Categories table for task organization
- Proper foreign key constraints and data validation

## Tech Stack

### Backend (.NET Core)
- .NET 9.0
- Entity Framework Core 9.0.2
- SQL Server (Azure)
- BCrypt.Net for password hashing
- JWT authentication

### Database
- Azure SQL Database
- Entity Framework Code First approach
- Data models with proper relationships

## Project Structure

```
backend/
└── TaskManagementApi/
    ├── Controllers/
    │   └── AuthController.cs
    ├── Models/
    │   ├── Task.cs
    │   ├── User.cs
    │   └── DTOs/
    │       └── LoginModel.cs
    ├── Data/
    │   └── TaskManagementContext.cs
    └── Services/
        └── JwtService.cs
```

## Getting Started

### Prerequisites
- .NET 9.0 SDK
- SQL Server or Azure SQL Database

### Backend Setup
1. Clone the repository
```bash
git clone https://github.com/GillianoA/TaskManagementSystem
cd backend/TaskManagementApi
```

2. Install dependencies
```bash
dotnet restore
```

3. Configure the database connection string in user secrets:
```bash
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your-connection-string"
```

4. Run migrations
```bash
dotnet ef database update
```

5. Start the application
```bash
dotnet run
```

## Current API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- POST `/api/auth/login` - User login
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

## Planned Features

- Task CRUD operations
- Frontend implementation with React
- Redis caching
- Task filtering and search
- User profile management
- Task categories management

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](https://github.com/GillianoA/TaskManagementSystem?tab=Apache-2.0-1-ov-file) file for details.

   Copyright 2025 Gilliano Agard

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
