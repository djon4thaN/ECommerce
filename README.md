# ECommerce

## Descrição

Este projeto consiste na modelagem de um sistema de e-commerce utilizando TypeScript, com foco na organização de entidades e na aplicação de conceitos de Programação Orientada a Objetos.

A proposta central é representar os principais elementos de uma aplicação de comércio eletrônico — como usuários, produtos, avaliações e comentários — por meio de classes bem definidas, explorando encapsulamento, tipagem estática e estruturação de código.

---

## Objetivo

O projeto foi desenvolvido com o objetivo de consolidar conhecimentos em:

- TypeScript  
- Programação Orientada a Objetos (POO)  
- Estruturação e organização de código  
- Modelagem de domínio  

---

## Estrutura do Projeto

```
src/
 ├── classes/
 │   ├── Base.ts
 │   ├── User.ts
 │   ├── Product.ts
 │   ├── Comment.ts
 │   └── Rating.ts
 └── db/
     ├── index.ts
     ├── comment.ts
     └── ratings.ts
```

### Classes principais

- **Base**: Classe base com propriedades e comportamentos compartilhados.  
- **User**: Representa os usuários do sistema.  
- **Product**: Representa os produtos disponíveis.  
- **Comment**: Estrutura para comentários associados a produtos.  
- **Rating**: Responsável pelas avaliações atribuídas aos produtos.  

### Camada de dados

A pasta `db` contém estruturas utilizadas para simular a persistência de dados, permitindo testar o comportamento das entidades.

---

## Tecnologias utilizadas

- TypeScript  
- Node.js  

---

## Considerações

Este projeto tem caráter acadêmico e foi desenvolvido com foco na modelagem e organização de código. Não se trata de uma aplicação completa com interface ou API integrada.

---

## Como executar

1. Instale as dependências:

```
npm install
```

2. Compile o projeto:

```
npx tsc
```

3. Execute o arquivo principal (ajustar conforme necessário):

```
node dist/index.js
```
