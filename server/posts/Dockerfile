FROM node:14-alpine

WORKDIR /app


COPY ["package.json", "package-lock.json", "./"]

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . .

EXPOSE 3006

CMD ["npm","start"]