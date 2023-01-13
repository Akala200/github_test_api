FROM node:16-alpine3.14

RUN mkdir -p Tracking_service/node_modules && chown -R node:node /Tracking_service

WORKDIR /Tracking_service

COPY package*.json ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "./dist/app.js" ]