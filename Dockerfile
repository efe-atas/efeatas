FROM oven/bun:latest

WORKDIR /app

# Copy package files
COPY package*.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
