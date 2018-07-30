FROM node:10-alpine

RUN apk add --no-cache git && \
    mkdir /app && \
    yarn --cwd /app add https://github.com/antiphoton/static-local-auth \
                        express \
                        serve-index

COPY server.js /app/server.js

USER node
WORKDIR /app

CMD node server.js

