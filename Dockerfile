FROM node:12-alpine

ENV ENV=production
ENV secket_key=asdfasdf
ENV APP_PORT=8000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000
CMD ["yarn","start"]