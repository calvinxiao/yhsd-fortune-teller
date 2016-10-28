#FROM hub.c.163.com/library/node:4.6.1
FROM node:6.9.1
COPY . /var/www
WORKDIR /var/www
RUN npm install
# --registry=https://registry.npm.taobao.org -g cnpm && cnpm install -d
CMD node app.js
