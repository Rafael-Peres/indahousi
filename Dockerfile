FROM node:15-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ['yarn', 'start']