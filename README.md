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

### `bash run dev`

For running development server

| Argument | Default | Description |
| --- | --- | --- |
| `-r` | `./static` | Static folder of application |
| `-s` | `./src` | Src folder of application |
| `-v` | `latest` | Docker image tag |
| `-p` | `8080` | Port development server would be using on host machine |

### `bash run test`

For running test cases

| Argument | Default | Description |
| --- | --- | --- |
| `-r` | `./static` | Static folder of application |
| `-s` | `./src` | Src folder of application |
| `-v` | `latest` | Docker image tag |

### `bash run export`

For exporting production bundle as artifact

| Argument | Default | Description |
| --- | --- | --- |
| `-v` | `latest` | Docker image tag |
| `-o` | `./build.tar` | Exports as a dir, or tar if -o ends with .tar |

### `bash run serve`

For serving production bundle via nginx

| Argument | Default | Description |
| --- | --- | --- |
| `-v` | `latest` | Docker image tag |
| `-o` | `_` | Server name for nginx |
| `-p` | `80` | Port to listen for nginx (Also the host port to run on) |

