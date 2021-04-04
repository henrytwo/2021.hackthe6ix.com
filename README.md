# Hack the 6ix - 2021 Landing page

## How to run

Running with docker is recommended to ensure compatibility with commands, node version, and environment
### Running without docker
 - `npm ci` to install packages (This does not affect docker (or other way around), hence can exist with docker)
   - To run development server, use `npm run start:npm`
   - To build application, use `npm run build:npm`
   - To remove gridsome generated files, use `npm run clean`

### Running with docker
 - No installing required, node_modules exist only within the container itself. 
   - To run development server, use `npm run start`
   - To build application, use `npm run build`
 - Bash file, `run`, included for running docker commands directly.
   - `bash run dev` for running development server
   - `bash run prod [output-dir=./dist]` for generating build files
