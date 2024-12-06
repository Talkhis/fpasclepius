FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV MODEL_URL = "https://storage.googleapis.com/fpascleoius/model-in-prod/model.json"

CMD ["npm","start"]
