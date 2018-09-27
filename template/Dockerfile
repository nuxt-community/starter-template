FROM node:10

LABEL maintainer David Miotti <david@muxumuxu.com>

ENV APP_PATH='/app'

RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY package.json $APP_PATH
COPY package-lock.json $APP_PATH
RUN npm install

COPY . $APP_PATH

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]
