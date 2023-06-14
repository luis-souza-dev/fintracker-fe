FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .
EXPOSE 4200
CMD [ "npm", "run" , "dev" ]