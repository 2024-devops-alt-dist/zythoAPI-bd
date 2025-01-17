# ZythologueAPI-BD

ZythologueAPI-BD is a simple REST API built using Node.js, Express, and PostgreSQL to manage a database of craft beers. This project demonstrates a basic implementation of CRUD operations with a focus on maintaining clean code, REST principles, and robust database integration.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on beers and breweries
- **Database**: PostgreSQL as the relational database
- **Environment Management**: `.env` file support for configuration
- **TypeScript**: Strongly typed implementation for maintainability and error prevention
- **Dockerized Application**: Both API and PostgreSQL running in Docker containers
- **API Documentation**: Swagger UI for easy API exploration and testing
- **Docker Compose**: One-command deployment of the entire stack

---

## Prerequisites

- Node.js (v20+ recommended)
- Docker and Docker Compose
- Postman (optional, for testing)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/2024-devops-alt-dist/zythoAPI-bd.git
cd zythologueapi-bd
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```bash
DB_HOST=localhost                 # Hostname for the PostgreSQL server
DB_USER=admin                     # PostgreSQL username
DB_PASSWORD=password              # PostgreSQL password
DB_NAME=postgres                  # Database name
DB_PORT=5432                      # PostgreSQL port
```

### 3. Running with Docker

Start both the API and database using Docker Compose:

```bash
docker-compose up --build
```

The application will be available at:

- API: http://localhost:3000
- API Documentation: http://localhost:3000/api-docs

### 4. Running Locally (Development)

If you prefer to run the API locally while using the dockerized database:

1. Start only the database:

```bash
docker-compose up -d postgres
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm run dev
```

---

## Available Scripts

- `npm run dev`: Start the application in development mode with hot-reloading
- `npm run build`: Compile TypeScript to JavaScript
- `npm run clean`: Clean the dist/ directory

## Project Structure

```plaintext
zythologueapi-bd/
├── src/
│   ├── controllers/
│   │   ├── beersController.ts      # Beer CRUD operations
│   │   └── breweriesController.ts  # Brewery CRUD operations
│   ├── routes/
│   │   ├── beersRoutes.ts         # Beer routes
│   │   └── breweriesRoutes.ts     # Brewery routes
│   ├── db/
│   │   └── config.ts              # Database configuration
│   ├── swagger/
│   │   └── swagger.ts             # API documentation
│   ├── app.ts                     # Express application setup
│   └── server.ts                  # Application entry point
├── .env                           # Environment variables
├── Dockerfile                     # API container configuration
├── docker-compose.yml             # Multi-container setup
├── package.json                   # Project dependencies
└── README.md                      # Project documentation
```

## API Documentation

The API documentation is available through Swagger UI at `/api-docs` when the application is running. It provides:

- Detailed endpoint descriptions
- Request/response schemas
- Interactive API testing interface
- Example requests and responses

## Troubleshooting

1. **Database Connection Issues**:

   - Ensure PostgreSQL container is running: `docker ps`
   - Check environment variables match docker-compose.yml
   - Verify database port is not in use

2. **API Container Issues**:

   - Check container logs: `docker-compose logs api`
   - Ensure all required environment variables are set
   - Verify port 3000 is not in use

3. **Development Mode Issues**:

   - Clear node_modules: `rm -rf node_modules && npm install`
   - Ensure TypeScript is compiled: `npm run build`
   - Check for compilation errors in the console

4. **Container Management**:
   - Stop all containers: `docker-compose down`
   - Rebuild and restart containers: `docker-compose up --build`
   - View container logs: `docker-compose logs -f`
