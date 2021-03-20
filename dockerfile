FROM node:12

WORKDIR /app

COPY package*.json ./

COPY . .

CMD ["/bin/bash", "./entrypoint.sh"]