FROM nginx:1.19.0

WORKDIR /app 

RUN apt-get update 
RUN apt-get install -y npm
RUN npm install npm@latest -g
RUN npm cache clean -f
RUN npm install -g n
RUN n stable

COPY . /app

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm run build:style
RUN npm run build

# CMD ["npm", "start"]

# production environment
# FROM nginx:alpine

RUN cp -r /app/build /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]
