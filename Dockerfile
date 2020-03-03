FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . . 

EXPOSE 3000

RUN npm install -g nodemon 

CMD ["npm", "run", "dev"]