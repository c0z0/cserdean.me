FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
RUN npm install

COPY . /usr/app

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000