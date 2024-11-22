# ZythologueAPI-BD

ZythologueAPI-BD is a simple REST API built using Node.js, Express, and PostgreSQL to manage a database of craft beers. This project demonstrates a basic implementation of CRUD operations with a focus on maintaining clean code, REST principles, and robust database integration.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on the database.
- **Database**: PostgreSQL as the relational database.
- **Environment Management**: `.env` file support for configuration.
- **TypeScript**: Strongly typed implementation for maintainability and error prevention.
- **Dockerized Database**: PostgreSQL running as a Docker container for easy setup.

---

## Prerequisites

- Node.js (v16+ recommended)
- Docker and Docker Compose (for the PostgreSQL database)
- Postman

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/2024-devops-alt-dist/zythoAPI-bd.git
cd zythologueapi-bd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root directory and add the following:

```bash
DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=password
DB_NAME=PostgreSQLdb
DB_PORT=5432
```

### 4. Start PostgreSQL (Docker)

Run the following command to start the PostgreSQL container:

```bash
docker-compose up -d
```

### 5. Start the Application

For development, run:

```bash
npm run dev
```

The server will be available at http://localhost:3000.

---

#### Scripts

`npm run dev`: Start the application in development mode with hot-reloading (using ts-node-dev).
`npm run build`: Compile the TypeScript files into JavaScript (output to dist/ directory).
`npm run serve`: Serve the compiled JavaScript files (production mode).
`npm run clean`: Clean the dist/ directory.

#### Project Structure

```plaintext
zythologueapi-bd/
├── src/
│   ├── db/
│   │   └── config.ts      # PostgreSQL connection setup
│   ├── app.ts             # Express app setup
│   └── server.ts          # Entry point
├── .env                   # Environment variables
├── docker-compose.yml     # Docker configuration for PostgreSQL
├── package.json           # Node.js project metadata
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

#### Testing Database Connection

The application automatically tests the database connection during startup. If the connection fails, check:

- Your .env file for valid credentials.
- PostgreSQL container status with `docker ps`
