
# Project-api

## Alunas:
Thayna Borges Halachen - RA: 2209155

Victoria Duran - RA: 2204428

## Objetivo do Projeto:
Aplicativo para controle de pedidos de compras online.

## Tecnologias e bibliotecas utilizadas:
- bcrypt;
- express;
- jsonwebtoken;
- Sequelize;
- Sqlite3;
- Uuid;
- Docker;
- Dbeaver;
- Node.js;
- Swagger;
- Sqlite.

## Estrutura de pastas e descrição das responsabilidades de cada componente:
    └───src
        ├───config         // diretório com config do ORM
        ├───controllers    // diretório com os endpoints
        ├───middleware     // diretório com projetos para validação de token
        ├───models         // diretório com as entidades / models do ORM
        ├───repositories   // diretório com os processamentos para as requests
        └───services       // diretório com funcionalidades em comum no projeto.

## Instruções para configurar e executar o projeto:

1- Clonar o repositório em uma pasta e aplicar o comando "Code ."

2- Conferir se as instalações express estão instaladas, se não instalar por meio do comando "npm i express"

3- Entrar na pasta "src" e rodar o servidor com o comando "node server.js"

4- No navegar, inserir na barra de busca "http://localhost:3000/api-docs"

5- Documentação Swagger:
- Para o método POST/API/USER/REGISTER, o usuário irá criar seu usuário de login e senha.

- Para o método POST/API/USER/LOGIN, o usuário deve inserir sua senha criada.

- Para o método PUT/API/USER/ACTUALIZAR, atualiza a senha e o usuário.

- Para o método POST/API/PEDIDOS/ADD, será criado o ID, ITEM e QUANTIDADE.

- Para o método DELETE/API/PEDIDOS/TIRAR, deletará um pedido da lista.

- Para o método GET/API/PEDIDOS/ALL irá aparecer toda a lista de pedidos criada.

6- Instalar o aplicativo Dvaber, por meio do link https://dbeaver.io/download/

7- Criar nova conexão de banco de dados, clicar em "Sqlite".

8- Procurar a pasta "src" e selecionar "dom.sqlite".

9- Irá abrir as tabelas para vizualizar o banco de dados.

### Imagem no Docker:
1- Instalar o Docker do link https://www.docker.com/products/docker-desktop/

2- Para criação da imagem, deve-se no terminal, dentro da pasta do projeto, rodar o comando "docker build -t nome_do_usuario_docker/nome_da_imagem:latest .

3- Para verificar se foi criado com sucesso a imagem, inserir no terminal "docker image ls" que listará todas as imagens ativas.

4- Antes de enviar a imagem, deve-se verificar se o usuário está autenticado com "docker login"

5- Para enviar a imagem para o registro remoto, basta inserir o comando "docker push nome_do_usuario/nome_da_imagem:latest".

6- A imagem já aparecerá no aplicativo do Docker em "Images"

### Container do Docker:

1- Para criar um container no Docker, basta inserir no terminal o comando "docker run nome_da_imagem" ou "docker run id_da_imagem", com a pasta do projeto desejado em aberto. O container será criado após a execução do comando.

2- Para listar todos os constainers criados, rodar o comando "docker ps -a"

3- Os containers aparecerão também no aplicativo do Docker em "Containers"