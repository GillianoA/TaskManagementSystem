# Task Management System

A modern full-stack task management application built with .NET Core and React, featuring secure authentication, robust database design, and containerized deployment using Docker.

## Current Features and Technologies

### Authentication System
- User registration with email and password
- Secure login with JWT token generation
- Password hashing using BCrypt
- Input validation and error handling

### Task Management Features
- View list of tasks with details
- Task status tracking
- Due date management
- Priority levels
- Task filtering capabilities

### API Documentation
- OpenAPI specification generation
- Interactive Swagger UI documentation
- API endpoint testing interface
- Detailed request/response schemas

### Database Structure
- Users table with secure password storage
- Tasks table with relationships to users
- Categories table for task organization
- Proper foreign key constraints and data validation

### Docker Implementation
- Multi-container setup with Docker Compose
- Separate containers for frontend and backend
- Development and production configurations
- Volume mounting for live code editing
- Environment variable management
- Nginx reverse proxy for frontend

## Technologies Used

### Backend (.NET Core)
- .NET 9.0
- Entity Framework Core 9.0.2
- SQL Server (Azure)
- BCrypt.Net for password hashing
- JWT authentication
- Swagger/OpenAPI for documentation
- Microsoft.AspNetCore.OpenApi for spec generation

### Frontend (React)
- React 19.0.0
- TypeScript
- Vite build tool
- TailwindCSS
- Axios for API communication
- React Router DOM v7
- HMR (Hot Module Replacement) support

### Database
- Azure SQL Database
- Entity Framework Code First approach
- Data models with proper relationships

### DevOps
- Docker containerization
- Docker Compose for multi-container orchestration
- Docker networking with custom bridge network
- Volume mounts for development
- Environment variable management
- Hot reload for development

## Project Structure

```
task-manager/
├── docker-compose.yml
├── frontend/
│   └── task-manager-frontend/
│       ├── Dockerfile.dev
│       ├── vite.config.ts
│       ├── components/
│       │   ├── LandingPage.tsx
│       │   ├── dashboard/
│       │   │   └── Dashboard.tsx
│       │   └── tasks/
│       │       └── TaskList.tsx
│       └── src/
│           ├── App.tsx
│           └── main.tsx
├── backend/
│   └── TaskManagementApi/
│       ├── Dockerfile.dev
│       ├── Controllers/
│       │   └── AuthController.cs
│       ├── Models/
│       │   ├── Task.cs
│       │   ├── User.cs
│       │   ├── Category.cs
│       │   └── DTOs/
│       │       └── LoginModel.cs
│       │       └── RegisterModel.cs
│       ├── Data/
│       │   └── TaskManagementContext.cs
│       └── Services/
│           └── JwtService.cs
```

## Getting Started

### Prerequisites
- Docker Desktop
- .NET 9.0 SDK (for local development)
- Node.js and npm (for local development)

### Running with Docker

1. Clone the repository
```bash
git clone https://github.com/GillianoA/TaskManagementSystem
cd TaskManagementSystem
```

2. Create a `.env` file in the root directory with your configuration:
```env
JWT_SECRET=your_jwt_secret
JWT_KEY=your_jwt_key
JWT_ISSUER=your_issuer
JWT_EXPIRY_MINUTES=60
JWT_AUDIENCE=your_audience
CONNECTION_STRING=your_db_connection_string
```

3. Build and run the containers
```bash
docker-compose up --build
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5145
- Swagger UI: http://localhost:5145/swagger

### Local Development Setup

1. Backend Setup
```bash
cd backend/TaskManagementApi
dotnet restore
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "your-connection-string"
dotnet ef database update
dotnet run
```

2. Frontend Setup
```bash
cd frontend/task-manager-frontend
npm install
npm run dev
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

### Tasks
- GET `/api/task` - Get all tasks
- POST `/api/task` - Create new task
- PUT `/api/task/{id}` - Update task
- DELETE `/api/task/{id}` - Delete task

## Environment Variables

### Backend
- `JWT_SECRET`: Secret key for JWT token generation
- `JWT_KEY`: Key for JWT token signing
- `JWT_ISSUER`: Token issuer
- `JWT_EXPIRY_MINUTES`: Token expiration time
- `JWT_AUDIENCE`: Token audience
- `CONNECTION_STRING`: Database connection string

### Frontend
- `VITE_API_URL`: Backend API URL

## Docker Configuration

The project uses Docker Compose with the following services:

### Backend Container
- .NET 9.0 runtime
- Development hot reload enabled
- Port 5145 exposed
- Volume mounted for live code editing
- Custom network for service communication

### Frontend Container
- Node.js 18 Slim
- Vite dev server with HMR
- Port 3000 exposed
- Volume mounted for live code editing
- Custom network for service communication

## Planned Features

- Task CRUD operations
- Redis caching
- Task filtering and search
- User profile management
- Task categories management
- Task sharing between users
- Email notifications

## Troubleshooting

### Docker Issues
- Use Docker Desktop to monitor container status
- Check container logs through Docker Desktop UI
- Verify port mappings and network connectivity
- Ensure all required environment variables are set

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](https://github.com/GillianoA/TaskManagementSystem?tab=Apache-2.0-1-ov-file) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
