# Use a lightweight Node.js image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy bot code
COPY . .

# Run the bot
CMD ["node", "index.js"]
