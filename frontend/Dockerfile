FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --network-timeout 100000

EXPOSE 3000

CMD ["yarn", "start"]
