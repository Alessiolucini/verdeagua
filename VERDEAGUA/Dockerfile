FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install --production

# Copy server and site files
COPY server.js ./
COPY site/ ./site/

# Expose port 80
EXPOSE 80

# Start the server
CMD ["node", "server.js"]
