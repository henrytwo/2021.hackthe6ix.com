# Basic build stuff (Custom since node is annoying af)
FROM ubuntu:bionic as base

# Install required packages
RUN apt-get update && apt-get install -y -qq apt-utils curl webp
RUN cd ~ && \
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y -qq nodejs

# Setup basic fs and node stuff
WORKDIR /usr/var/app
COPY package*.json gridsome*.js ./
RUN npm ci


# Run as development server
FROM base as development
CMD ["npm", "run", "docker:start"]


# Build and only get the built files
FROM base as production
COPY ./static ./static
COPY ./src ./src
CMD ["npm", "run", "docker:build"]