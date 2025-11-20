FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Set default environment variables
ENV PORT=3000
ENV AWS_REGION=eu-west-1

# Start the application
CMD ["node", "server.js"]
