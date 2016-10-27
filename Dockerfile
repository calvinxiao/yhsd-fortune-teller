FROM hub.c.163.com/library/node:4.6.1
COPY . /var/www
WORKDIR /var/www
RUN npm install --registry=https://registry.npm.taobao.org -d
CMD node app.js