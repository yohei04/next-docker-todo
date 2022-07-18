FROM node:16.16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

CMD yarn dev
