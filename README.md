# Express User API

Cette application est une API REST développée avec  Express Js. 
### Les données sont stockées en mémoire et sont réinitialisées à chaque redémarrage du serveur. 
---
## Technologies utilisées
- Express.js
- Jest
- Supertest
---

## Prérequis
- Node.js 
- npm

Vérification :
    `node -v`  
    `npm -v`

---
## Règles de validation implémentées dans les API
- Le username et âge sont obligatoires 
- Le username doit contenir au moins 3 caractères
- Le username doit commencer par une lettre
- Le username doit être unique
- L’âge doit être supérieur ou égal à 18

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
   `npm start`

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
`http://localhost:3000/user`

Filtrer par âge :  
`http://localhost:3000/user?age=19`

`19` peut être changer par un autre âge 

Utilisateur par ID :  
`http://localhost:3000/user/1`

`1` peut être changer par un autre id

Utilisateur par username :  
`http://localhost:3000/user/name/imane`

  `imane` peut être changer par un autre username

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
## Tests :
Les tests couvrent :
- les cas valides
- les cas d’erreurs
- la validation des données
- les codes HTTP retournés

