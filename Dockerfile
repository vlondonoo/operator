## STEP 1: Build ###
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


### STEP 2: Run web server ###
FROM nginx:alpine

COPY --from=node /app/dist/operator /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html



### execute
# docker build -t vlondonoo/operator .
#docker run -d -p 4201:80 vlondonoo/operator

##npx kill-port 4200