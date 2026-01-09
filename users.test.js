const request = require("supertest");
const app = require("./app");



//test de l'api POST /user/add
describe("POST /user/add", () => {
  it("Il doit ajouter un utilisateur", async () => {
    const res = await request(app).post("/user/add").send({ username: "aya", age: 19 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.username).toBe("aya");
    expect(res.body.age).toBe(19);

  });
  it("Il doit afficher l'erreur de Username et l'âge sont obligatoires", async () => {
    const res = await request(app).post("/user/add").send({ age: 19 });
     expect(res.statusCode).toBe(400);
     expect(res.body).toBe("Username et âge sont obligatoires");
  });

  it("Il doit afficher l'erreur Username et âge sont obligatoires", async () => {
    const res = await request(app).post("/user/add").send({ username: "aya" }); 
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("Username et âge sont obligatoires");
    
  });

  it("Il doit afficher l'erreur username doit avoir une longueur minimale de 3 lettres!!", async () => {
    const res = await request(app).post("/user/add").send({ username: "ab", age: 19 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("username doit avoir une longueur minimale de 3 lettres!!");
  });

  it("Il doit afficher l'erreur l'âge doit être supérieur à 18", async () => {
    const res = await request(app).post("/user/add").send({ username: "ilham", age: 14 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("L'âge doit être supérieur à 18");
  });

  it("Il doit afficher l'erreur username existe déjà", async () => {
    const res = await request(app).post("/user/add").send({ username: "aya", age: 19 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("Ce username existe déjà");
     
  });

  it("Il doit afficher l'erreur username doit commencer par une lettre", async () => {
    const res = await request(app).post("/user/add").send({ username: "12aya", age: 19 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("username doit commencer par une lettre");
  });
});



//test de l'api GET /user?age=..
describe("GET /user", () => {
  it("il doit retourner tous les utilisateurs ", async () => {
    const res = await request(app).get("/user");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("il doit retourner la liste des utilisateurs filtrée par âge", async () => {
    const age = 19;
    const res = await request(app).get(`/user?age=${age}`);
    expect(res.statusCode).toBe(200);
    for (const u of res.body) {
      expect(u.age).toBe(age);
    }
  });

  it("il doit retourner une table vide si aucun utilisateur avec cet âge n'est présent", async () => {
    const age = 29;
    const res = await request(app).get(`/user?age=${age}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });
});


//test de l'api GET /user/:id
describe("GET /user/:id", () => {
  it("Il doit afficher l'utilisateur avec l'id demandé", async () => {
    const res = await request(app).get("/user/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("username");
  });

  it("Il doit afficher username, avec cet ID n'existe pas", async () => {
    const res = await request(app).get("/user/100");
    expect(res.statusCode).toBe(404);
    expect(res.body).toBe("username avec cet Id n'existe pas");
  });
});


//test de l'api GET /user/name/:username
describe("GET /user/name/:username", () => {
  it("Il doit afficher l'utilisateur avec le username saisi", async () => {
    const res = await request(app).get("/user/name/aya");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("username", "aya");
  });

  it("Il doit afficher username n'existe pas dans la liste!!", async () => {
    const name = "abir";
    const res = await request(app).get(`/user/name/${name}`);
    expect(res.statusCode).toBe(404);
     expect(res.body).toBe("utilisateur avec ce username n'existe pas dans la liste!!");
  });
});


//test de l'api PUT /user/:id
describe("PUT /user/:id", () => {
  it("Il doit modifier l'utilisateur avec cet id", async () => {
    const res = await request(app).put("/user/1").send({ username: "test122" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("username", "test122");

  });

  it("Il doit afficher l'erreur username avec cet Id n'existe pas", async () => {
    const res = await request(app).put("/user/99").send({ username: "test122" });
    expect(res.statusCode).toBe(404);
    expect(res.body).toBe("username avec cet Id n'existe pas !");

  });
  it("Il doit afficher que username est obligatoire", async () => {
    const res = await request(app).put("/user/2").send({ username: "" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("username est obligatoire");
  });

  it("Il doit afficher que username doit contenir au moins 3 caractères", async () => {
    const res = await request(app).put("/user/1").send({ username: "ab" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("username doit avoir au moins 3 caractères");
  });

  it("Il doit afficher Ce username existe déjà la liste ", async () => {
    const res = await request(app).put("/user/2").send({ username: "test122" });
    expect(res.statusCode).toBe(400);
    expect(res.body).toBe("Ce username existe déjà dans la liste ");
  });
});


//test de l'api DELETE /user/:id
describe("DELETE /user/:id", () => {
  it("Il doit supprimer user avec l'id saisi", async () => {
    const res = await request(app).delete("/user/2");
    expect(res.statusCode).toBe(200);
  });

  it("Il doit afficher cet utilisateur n'existe pas", async () => {
    const res = await request(app).delete("/user/29");
    expect(res.statusCode).toBe(404);
    expect(res.body).toBe("username avec cet Id n'existe pas !");
  });
});
