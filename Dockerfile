FROM node:15.3.0-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8020

CMD ["npm", "start"]