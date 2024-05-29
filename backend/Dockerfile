# Use an official Node.js image as a base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server.js, db.js, and the routes directory to the working directory
COPY server.js .
COPY db.js .
COPY routes/ ./routes/
COPY Controller/ ./Controller

# Expose the port your app runs on
EXPOSE 4000

# Set environment variables
ENV DB_HOST=mysql-container
ENV DB_USER=example_user
ENV DB_PASSWORD=example_password
ENV DB_NAME=test

# Command to run your application
CMD ["node", "server.js"]