const express = require("express");
const router = express.Router();

router.use(express.json());
let Users = [
  {
    "id":1,
    "username":"imane",
    "age":19
    
  },
  {
    "id":2,
    "username":"kamal",
    "age":25
    
  },
];
let next = 1;

//api pour ajouter les utilisateurs dans une table
router.post("/user/add", (req, res) => {
  const username = req.body.username?.trim();
  const { age } = req.body;
  if (username == null || age == null) {
    return res.status(400).send("Username est âge sont obligatoires");
  } else if (username.length < 3) {
    return res
      .status(400)
      .send("username doit avoir une longueur minimale de 3 lettre!!");
  } else if (age < 18) {
    return res.status(400).json("L'âge doit être supérieur à 18");
  } else if (!/^[a-zA-Z]/.test(username)) {
    return res.status(400).json("username doit commencer par une lettre");
  }
  const exists = Users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
  if (exists) {
    return res.status(400).json("username existe déjà");
  }

  const user = {
    id: next++,
    username,
    age,
  };

  Users.push(user);
  Users.sort((a, b) => a.username.localeCompare(b.username));

  res.status(201).json(user);
});

//API pour recevoir les utilisateurs filtré par age  sinon on affiche tous les utilisateurs
router.get("/user", (req, res) => {
  const { age } = req.query;
  if (!age) {
    return res.send(Users);
  } else {
    const filtred = Users.filter((u) => u.age == parseInt(age));
    return res.json(filtred);
  }
});

//API pour recuperer utilisateur par id
router.get("/user/:id", (req, res) => {
  const user = Users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json("username avec cet Id n'existe pas !");
  }
  return res.json(user);
});


//API pour recuperer un utilisateur par username
router.get("/user/name/:username", (req, res) => {
  const user = Users.find(
    (u) => u.username.toLowerCase() === req.params.username.toLowerCase()
  );
  if (!user) {
    return res.status(404).json("username n'existe pas dans la liste!!");
  }
  return res.json(user);
});


//API pour modifier un utilisateur en utilisant id
router.put("/user/:id", (req, res) => {
  const user = Users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json("username avec cet Id n'existe pas !");
  }
  if (!req.body.username) {
    return res.status(400).send("username est obligatoire");
  } else if (req.body.username.length < 3) {
    return res
      .status(400)
      .send("username doit avoir au moins 3 caractères");
  }

  const updatedUsername=req.body.username.trim();
  const exists = Users.find(
    (u) =>
      u.id !== user.id &&
      u.username.toLowerCase() === updatedUsername.toLowerCase()
  );
  if (exists) {
    return res.status(400).json({ error: "Ce username existe déjà la liste " });
  }
  user.username = updatedUsername;
  Users.sort((a, b) => a.username.localeCompare(b.username));

  return res.json(user);
});


//API pour supprimer un utilisateur
router.delete("/user/:id", (req, res) => {
  const user = Users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json("username avec cet Id n'existe pas !");
  }

  const index = Users.indexOf(user);
  Users.splice(index, 1);

  res.send(Users);
});

module.exports = router;
