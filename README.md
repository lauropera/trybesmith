# 💻 Trybesmith

<!-- ![Preview do Projeto Blogs API](./project-preview.png) -->

## 📡 Desenvolvimento

Projeto desenvolvido na <a href="https://betrybe.com/" target="_blank">Trybe</a> durante o módulo de Back-End!

Nesse projeto foi desenvolvido uma API RESTful de vendas de uma loja de itens medievais em TypeScript. Onde é possivel realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão. A autenticação foi feita com Json Web Token.

## 📚 Documentação

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório:

```
git clone git@github.com:lauropera/trybesmith.git
```

### 2 - Na raíz do projeto, suba os containers `trybesmith` e `trybesmith_db` utilizando o docker-compose.

    docker-compose up -d

### 3 - Abra o terminal do container `trybesmith`.

    docker exec -it trybesmith bash

### 4 - No terminal do container, instale as dependências com o comando:

    npm install

### 5 - Agora execute a aplicação com o comando:

    npm start

### 6 - Acesse a documentação e faça requisições para o servidor aberto na porta 3000

Acesse a rota http://localhost:3000/docs para acessar a documentação e testar a API. Se preferir, utilize um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para fazer as requisições.

</details>
<br />

## ⚙️ Tecnologias

- TypeScript
- Node.js
- Express.js
- Json Web Tokens
- DotEnv
- Joi
- Docker
- MySQL
- Swagger

#

<div>
  <p align="center">🍐</p>
</div>
