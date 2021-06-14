# Hack the 6ix Landing Page Deployment Workflow

Basic Secrets:

| Key           | Description   |
| ------------- |:-------------|
| DOCKERHUB_PREVIEW_REPOSITORY     | Development docker repo (e.g. `preview-landing-page`) |
| DOCKERHUB_REPOSITORY     | Production docker repo (e.g. `landing-page`) |
| DOCKERHUB_TOKEN | DockerHub API key |
| DOCKERHUB_USERNAME | DockerHub Username |
| GH_ACCESS_TOKEN | GitHub Access Token |
| SSH_HOST | Host of the server to SSH into for deployment |
| SSH_USERNAME | Username of user to SSH as |
| SSH_KEY | SSH key for deployment |
| YEAR | Calendar year corresponding to this landing page. Will be used for the subdomain + docker tags |

Ensure that the `/script` directory on the server contains the scripts in https://github.com/hack-the-6ix/hackthe6ix-scripts
