# CRUD-NodeJS-MongoDB

## Sobre o Projeto

Esta aplicação foi criada como parte de estudos relacionados ao Node.js. Durante o processo de desenvolvimento, adquiri conhecimentos em diversas áreas, incluindo:

- Utilização do framework Express para lidar com rotas.
- Configuração e uso de arquivos .env para gerenciamento de variáveis de ambiente.
- Integração com o MongoDB utilizando o Mongoose para facilitar a comunicação com o banco de dados.
- Criação de modelos para definir a estrutura dos dados e interagir com o MongoDB.
- Trabalho com o banco de dados NoSQL MongoDB.
- Teste das rotas da API utilizando o Postman.

## Dificuldades e Aprendizados

Inicialmente, encontrei algumas dificuldades ao lidar com o Mongoose para realizar operações CRUD no MongoDB devido ao meu primeiro contato com a ferramenta. No entanto, à medida que compreendi a lógica por trás do Mongoose, o processo se tornou mais simples e rápido, resultando em uma aplicação bem-sucedida.

## Observações

- Para estabelecer a conexão com o banco de dados local, é necessário definir o campo de HOST dentro do arquivo .env.
- Como esta é uma API voltada para a conexão com o banco de dados, o frontend não foi desenvolvido. Para testar as funcionalidades da API, recomenda-se utilizar ferramentas como o Postman para testar as requisições HTTP.

## Instalação

Para instalar as dependências do projeto, utilize o npm:

```bash
npm install express mongoose
