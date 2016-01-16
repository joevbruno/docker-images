# Set the base image to Ubuntu
FROM nginx

# File Author / Maintainer
MAINTAINER Joe Bruno "joevbruno@me.com"

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get update --fix-missing && \
    apt-get -y install nano wget dialog net-tools python build-essential git openssl gcc ca-certificates && \
    apt-get update --fix-missing && \
    apt-get install -y nginx 

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Append "daemon off;" to the configuration file
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

CMD service nginx start

