# Use Node.js 20 as it's stable and has good TypeScript support
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables with default values (can be overridden by docker-compose)
ENV DB_HOST=localhost \
    DB_USER=admin \
    DB_PASSWORD=password \
    DB_NAME=postgres \
    DB_PORT=5432

# Build TypeScript code
RUN npm run build

# Expose API port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
