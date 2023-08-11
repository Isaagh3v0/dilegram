FROM node:latest

WORKDIR /app

COPY . /app/

EXPOSE 1011

RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]