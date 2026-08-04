FROM node:20.15.0-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8000 8080

CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]
