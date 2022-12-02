FROM node:16-alpine

WORKDIR /app

COPY build ./build

RUN npm install -g serve

EXPOSE 3000
# required for docker desktop port mapping

CMD ["serve" ,"-s", "build"]
