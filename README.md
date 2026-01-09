# Express User API

Cette application est une API REST développée avec  Express Js.  


---

## Fonctionnalités
- Ajouter un utilisateur
- Lister tous les utilisateurs
- Filtrer les utilisateurs par âge
- Récupérer un utilisateur par ID
- Récupérer un utilisateur par username
- Modifier un utilisateur
- Supprimer un utilisateur
- Validation des données
- Tests automatisés
---

## Technologies utilisées
- Express.js
- Jest
- Supertest
---

## Structure du projet
Express_User_API/
├── app.js
├── server.js
├── users.js
├── users.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

## Prérequis
- Node.js 
- npm

Vérification :
node -v  
npm -v

---

## Installation du projet
Cloner le projet depuis GitHub :
    `git clone https://github.com/aya2705/Express_User_API.git`

Accéder au dossier du projet :
    `cd express-user-api`

Installer les dépendances :
    `npm install`

---

## Lancer le projet en local
   `nodemon server.js`

Le serveur démarre sur :
http://localhost:3000

---


## Comment tester les endpoints
Les endpoints peuvent être testés de trois façons :
- Navigateur (GET uniquement)
- Postman 
---

## Tester avec le navigateur (GET)
Tous les utilisateurs :  
http://localhost:3000/user

Filtrer par âge :  
http://localhost:3000/user?age=19

Utilisateur par ID :  
http://localhost:3000/user/1

Utilisateur par username :  
http://localhost:3000/user/name/imane

---

## Tester avec Postman 

Ajouter un utilisateur  
Méthode : POST  
URL : http://localhost:3000/user/add  
Body (JSON) :
{
  "username": "aya",
  "age": 19
}

Modifier un utilisateur  
Méthode : PUT  
URL : http://localhost:3000/user/1  
Body (JSON) :
{
  "username": "newname"
}

Supprimer un utilisateur  
Méthode : DELETE  
URL : http://localhost:3000/user/1

---

## Frameworks de test utilisés :
- Jest
- Supertest

---
## Lancer les tests
Les tests sont écrits avec Jest et Supertest :
    `npm test`

Tous les tests doivent passer avec succès.

---

## Règles de validation implémentées dans les API
- Le username et âge sont bligatoires 
- Le username doit contenir au moins 3 caractères
- Le username doit commencer par une lettre
- Le username doit être unique
- L’âge doit être supérieur ou égal à 18

---

## Tests automatisés
Les tests couvrent :
- les cas valides
- les cas d’erreurs
- la validation des données
- les codes HTTP retournés



## Scripts disponibles
"scripts": {
  "start": "node server.js",
  "test": "jest"
}

---

