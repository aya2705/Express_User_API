# Express User API

Cette application est une API REST développée avec Node.js et Express.  
Elle permet de gérer des utilisateurs avec validation des données et tests automatisés.

Le projet inclut :
- une documentation complète
- des tests automatisés
- des instructions simples pour exécuter le projet en local
- des exemples pour tester tous les endpoints

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
- Node.js
- Express.js
- Jest
- Supertest
- Git / GitHub

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
- Node.js (version 16 ou plus recommandée)
- npm

Vérification :
node -v  
npm -v

---

## Installation du projet
Cloner le projet depuis GitHub :
git clone https://github.com/<votre-username>/express-user-api.git

Accéder au dossier du projet :
cd express-user-api

Installer les dépendances :
npm install

---

## Lancer le projet en local
npm start

Le serveur démarre sur :
http://localhost:3000

---

## Lancer les tests
Les tests sont écrits avec Jest et Supertest :
npm test

Tous les tests doivent passer avec succès.

---

## Comment tester les endpoints
Les endpoints peuvent être testés de trois façons :
- Navigateur (GET uniquement)
- Postman / Insomnia
- curl (ligne de commande)

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

## Tester avec Postman ou Insomnia

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

## Tester avec curl (terminal)

Lister les utilisateurs :
curl http://localhost:3000/user

Filtrer par âge :
curl "http://localhost:3000/user?age=19"

Utilisateur par ID :
curl http://localhost:3000/user/1

Utilisateur par username :
curl http://localhost:3000/user/name/imane

Ajouter un utilisateur :
curl -X POST http://localhost:3000/user/add -H "Content-Type: application/json" -d "{\"username\":\"aya\",\"age\":19}"

Modifier un utilisateur :
curl -X PUT http://localhost:3000/user/2 -H "Content-Type: application/json" -d "{\"username\":\"test\"}"

Supprimer un utilisateur :
curl -X DELETE http://localhost:3000/user/2

---

## Règles de validation
- Le username est obligatoire
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

Frameworks utilisés :
- Jest
- Supertest

---

## Scripts disponibles
"scripts": {
  "start": "node server.js",
  "test": "jest"
}

---

## Versionnement avec Git
Initialiser le dépôt :
git init  
git add .  
git commit -m "Initial commit"

Publier sur GitHub :
git branch -M main  
git remote add origin https://github.com/<votre-username>/express-user-api.git  
git push -u origin main

---

## Auteur
Projet réalisé par Aya Touicha  
API Express avec tests automatisés.

---

## Licence
Projet à but éducatif.
