FROM node:10.20.0-alpine3.10
COPY package.json package-lock.json ./
RUN npm install
COPY src ./
CMD ["node", "index.js"]
EXPOSE 8080
