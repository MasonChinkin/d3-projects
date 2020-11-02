FROM node:14.15.0-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm build

EXPOSE 8020

CMD ["npm", "start"]