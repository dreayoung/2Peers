FROM node:16.1.0

EXPOSE 8000

ENV PORT=8000

WORKDIR /2peers-backend

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]

