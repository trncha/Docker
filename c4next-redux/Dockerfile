FROM node:alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . /usr/app

RUN npm install
RUN npm run build

CMD "npm" "start"