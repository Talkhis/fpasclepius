FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV MODEL_URL = "SET YOUR MODEL URL!"

CMD ["npm","start"]
