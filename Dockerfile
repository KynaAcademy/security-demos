FROM node:jessie

WORKDIR /app

ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

RUN yarn install

ADD . /app

ENV PORT 3000
ENV NODE_ENV production

ENTRYPOINT ["/bin/bash", "-c"]

CMD ["yarn start"]
