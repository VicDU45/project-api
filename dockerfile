FROM node:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# 5º CMD e ENTRYPOINT são comandos utilizados para inicializar a aplicação, não iremos abortar a fundo eles, mas usaremos o CMD em nossa aplicação, replicando o comando que usamos em nosso computador para executar a aplicação que seria node nome-arquivo.js
CMD ["node", "./src/server.js"]