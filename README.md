# ECommerce Domain Modeling (TypeScript)

## Description

This project focuses on the domain modeling of an e-commerce system using TypeScript, applying Object-Oriented Programming principles and emphasizing clean architecture concepts.

It represents core business entities such as users, products, ratings, and comments, structured to reflect real-world scenarios and support scalability and maintainability.

---

## Objective

The main objective of this project is to strengthen skills in:

- TypeScript and static typing  
- Object-Oriented Programming (OOP)  
- Domain-driven design fundamentals  
- Code organization and maintainability  
- Separation of concerns  

---

## Project Structure

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

### Domain Layer

- **Base**: Abstracts shared attributes and behaviors  
- **User**: Represents system users and their interactions  
- **Product**: Encapsulates product data and logic  
- **Comment**: Handles user-generated product feedback  
- **Rating**: Manages product evaluation logic  

### Data Simulation

The `db` folder simulates a persistence layer, enabling basic interaction with domain entities without a real database.

---

## Technologies

- TypeScript  
- Node.js  

---

## Architectural Notes

This project follows a domain-oriented structure, focusing on:

- Clear entity separation  
- Encapsulation of business rules  
- Readable and maintainable code  
- Foundation for scalable backend systems  

Although simplified, the structure reflects concepts used in enterprise environments.

---

## Relevance for Enterprise Systems

This project demonstrates foundational skills relevant to enterprise environments, such as:

- Structured domain modeling  
- Code organization aligned with scalable architectures  
- Readiness for backend development and system design  

---

## How to Run

1. Install dependencies:

```
npm install
```

2. Compile the project:

```
npx tsc
```

3. Run the main file (adjust if necessary):

```
node dist/index.js
```
