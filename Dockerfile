FROM docker:14-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]