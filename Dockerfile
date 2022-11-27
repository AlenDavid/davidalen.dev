FROM node:16-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn export

FROM nginx
COPY --from=builder /app/out /usr/share/nginx/html