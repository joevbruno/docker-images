# Sources
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04


# Set the base image to Ubuntu
FROM ubuntu

# File Author / Maintainer
MAINTAINER Joe Bruno "joevbruno@me.com"

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get update --fix-missing && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    apt-get -y install nano wget dialog net-tools python build-essential git imagemagick openssl gcc ca-certificates && \
    apt-get update --fix-missing

# Install nodemon
RUN npm install -g npm@3.5.3 forever
# RUN sudo pm2 startup systemd

# Provides cached layer for node_modules
RUN mkdir app && \
    cd app

COPY package.json ./app/package.json

RUN cd ./app && npm install && mkdir src
ADD ./src /app/src

# Define working directory
WORKDIR /app/src

# Expose port
EXPOSE  9000

# Run app
CMD forever index.js
