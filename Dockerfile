# build stage
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# production stage
FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
EXPOSE 3000

CMD ["yarn","start:prod"]