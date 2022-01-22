FROM node:16

# Create app directory inside image
WORKDIR /usr/src/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN apt-get update && apt-get install -y curl

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm install -g npm@8.3.1

RUN npm audit fix

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]