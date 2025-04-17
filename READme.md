# 📦 API RESTful com TypeScript, Express e Mongoose

Este é um projeto pessoal de uma API RESTful construída com **TypeScript**, **Express**, **Mongoose**, **Winston** e validações usando **express-validator** e **mongoose-validator**.
A API foi estruturada para ser escalável, segura e fácil de manter.

---

## 🚀 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Express**
- **Mongoose**
- **express-validator**
- **mongoose-validator**
- **Winston** (logger)
- **Morgan** (logger de requisições)
- **dotenv** (variáveis de ambiente)
- **config** (gerenciamento de configuração)
- **MongoDB** (MongoDB Atlas)

---

## ⚙️ Guia de criação do projeto

    - npm init -y
    - tsc --init
    - npm i config dotenv express express-validator mongoose morgan winston
    - npm i @types/config @types/express @types/mongoose @types/morgan @types/node ts-node-dev typescript --save-dev

## 🧾 Variáveis de Ambiente

    - PORT=3000
    - MONGO_URI=mongodb://localhost:27017/sua-base-de-dados
    - NODE_ENV=development

## 📌 Possibilidades de Expansão

    - Adição de autenticação JWT
    - Documentação com Swagger
    - Testes com Jest e Supertest
    - Paginação, filtros e ordenação nas rotas
