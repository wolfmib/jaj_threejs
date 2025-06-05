#Dockerfile
#issue:FROM node:20-alpine
#FROM --platform=linux/amd64 node:20-slim
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
#ENV NODE_ENV=development
#RUN npm ci || npm install && npm install vite -D


# ✅ no optional crap, and Vite 5 just works
RUN npm install --include=dev --omit=optional

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

