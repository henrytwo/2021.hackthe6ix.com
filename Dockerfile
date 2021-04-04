# Basic build stuff (Custom since node is annoying af)
FROM ubuntu:bionic as base

# Install required packages
RUN apt-get update && apt-get install -y -qq apt-utils curl webp
RUN cd ~ && \
    curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y -qq nodejs

# Setup basic fs & user stuff
WORKDIR /usr/var/app
RUN useradd -ms /bin/bash owo
RUN chown -R owo:owo .
USER owo

# node stuff
COPY package*.json gridsome*.js ./
RUN npm ci


# Run as development server
FROM base as development
CMD ["npm", "run", "start:npm"]


# Build and only get the built files
FROM base as production
RUN npm run build:npm
CMD ["echo", "owo"]