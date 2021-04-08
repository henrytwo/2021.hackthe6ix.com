# Hack the 6ix - 2021 Landing page

## How to run

Running with docker is recommended to ensure compatibility with commands, node version, and environment
### Running without docker
 - `npm ci` to install packages (This does not affect docker (or other way around), hence can exist with docker)
   - To run development server, use `npm run start:npm`
   - To build application, use `npm run build:npm`
   - To test application, use `npm run test:npm`
   - To remove gridsome generated files, use `npm run clean`

### Running with docker
 - No installing required, node_modules exist only within the container itself. 
   - To run development server, use `npm run start`
   - - To test application, use `npm run test`
   - To build application, use `npm run build`

## `run` commands

TODO
