# Use official Node.js image as a base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
