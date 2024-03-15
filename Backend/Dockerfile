FROM node:21 as base

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

FROM base as prod 

ENV NODE_PATH=./build

RUN npm run build