FROM node:21 as base

WORKDIR /home/frontend/app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

FROM base as prod 

RUN npm run build