FROM node:23-alpine3.19
WORKDIR /collage-menegment/backend
COPY . .
COPY .env env
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]