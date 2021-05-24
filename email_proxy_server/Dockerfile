FROM node:14
WORKDIR /usr/ht6/server

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
EXPOSE 6969
RUN npm install
RUN npm run build
CMD ["node", "start"]
