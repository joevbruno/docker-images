FROM ubuntu

MAINTAINER Joe Bruno <joevbruno@me.com>

# Update the repository
RUN apt-get update && \
    apt-get update --fix-missing && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup | sudo bash - && \
    apt-get -y install nano wget dialog net-tools python build-essential nodejs npm git supervisor imagemagick openssl gcc ca-certificates