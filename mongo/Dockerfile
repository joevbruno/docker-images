FROM        ubuntu:14.04.1  //FROM tutum/mongodb
MAINTAINER  Joe Bruno "joevbruno@me.com"

# Install MongoDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*


# Create the MongoDB data directory
RUN mkdir -p /data/db


# Define mountable directories.
#VOLUME ["/data/db"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["mongod"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]

# Migrate data
#ADD js/initiate.js /initiate.js
#ADD js/setupReplicaSet1.js /setupReplicaSet1.js
#ADD js/setupReplicaSet2.js /setupReplicaSet2.js


#CMD ["/start.sh"]