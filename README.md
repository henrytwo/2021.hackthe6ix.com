# Hack the 6ix - 2021 Landing page

## How to run

Running with docker is recommended to ensure compatibility with commands, node version, and environment
### Running without docker
 - `npm ci` to install packages (This does not affect docker (or other way around), hence can exist with docker)
    - To run development server, use `npm run start:npm`
    - To build application, use `npm run build:npm`

### Running with docker
 - No installing required, node_modules exist only within the container itself. 
