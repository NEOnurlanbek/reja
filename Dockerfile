FROM node:16.19.0

COPY . /reja

WORKDIR /reja
CMD npm install && node server.js


# DOCKERFILE => COCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => COCKER IMAGE => docker-compose: CONTAINER