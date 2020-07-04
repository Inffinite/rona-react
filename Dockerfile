FROM mhart/alpine-node:6.17.1

EXPOSE 3000

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
# RUN npm run build:style
# RUN npm run build

COPY . ./

# CMD ["npm", "start"]