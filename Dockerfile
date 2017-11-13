FROM node:wheezy

WORKDIR /app

ONBUILD ADD . /app

ENTRYPOINT ["/bin/bash", "-c"]

CMD ["yarn", "start"]
