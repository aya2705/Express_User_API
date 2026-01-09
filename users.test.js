const request = require('supertest');
const app = require('./app'); 


describe("POST /user/add",()=>{
    it('doit ajouter un utilisateur',async()=>{
        const res=await request(app).post('/user/add').send({username:"aya",age:19});
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.username).toBe('aya');
        expect(res.body.age).toBe(19);
    });
    it("doit afficher l'erreur de Username est âge sont obligatoires",async()=>{
        const res=await request(app).post('/user/add').send({username:"",age:19});
        expect(res.statusCode).toBe(400);

    });

    it("doit afficher l'erreur username doit avoir une longueur minimale de 3 lettre!!",async()=>{
        const res=await request(app).post('/user/add').send({username:"ab",age:19});
        expect(res.statusCode).toBe(400);    
    });

    it("doit afficher l'erreur L'âge doit être supérieur à 18",async()=>{
        const res=await request(app).post('/user/add').send({username:"ilham",age:14});
        expect(res.statusCode).toBe(400);    
    });

    it("doit afficher l'erreur username existe déjà",async()=>{
        const res=await request(app).post('/user/add').send({username:"aya",age:19});
        expect(res.statusCode).toBe(400);   
    });

    it("doit afficher l'erreur username doit commencer par une lettre",async()=>{
        const res=await request(app).post('/user/add').send({username:"12aya",age:19});
        expect(res.statusCode).toBe(400);   
    });

});


//test de l'api GET /user

describe('GET /user',()=>{
    it("il doit retourner tous les utilisateurs ",async()=>{
        const res=await request(app).get('/user');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

    });

    it('il doit retourner la liste des utilisateurs filtrer par age',async()=>{
        const age=19;
        const res=await request(app).get(`/user?age=${age}`);
        expect(res.statusCode).toBe(200);
        for(const u of res.body){
            expect(u.age).toBe(age);
        }
    });

     it("il doit retourner une table vide si aucun utilisateur avec cet age n'est present",async()=>{
        const age=29;
        const res=await request(app).get(`/user?age=${age}`);
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(0);
    });  
})

describe('GET /user/:id',()=>{
    it("should afficher l'utilisateur avec l'id demander ",async()=>{
        const res=await request(app).get('/user/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id',1);
        expect(res.body).toHaveProperty('username');
    });

    it("doit afficher username avec cet Id n'existe pas",async()=>{
        const res=await request(app).get('/user/100');
        expect(res.statusCode).toBe(404);
    });

});

 describe('GET /user/name/:username',()=>{
    it("should afficher l'user avec le username saisi",async()=>{
        const res=await request(app).get('/user/name/aya');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('username','aya');
    });

    it("doit afficher username n'existe pas dans la liste!!",async()=>{
        const name="abir";
        const res=await request(app).get(`/user/name/${name}`);
        expect(res.statusCode).toBe(404);   
    });    
});

describe('PUT /user/:id',()=>{
    it("doit modifier l'utilisateur avec cet id",async()=>{
      const res=await request(app).put('/user/1').send({username:"test122"});

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('username','test122');
      
    });

    it("doit afficher l'erreur username avec cet Id n'existe pas",async()=>{
        const res=await request(app).put('/user/99').send({username:"test122"});
        expect(res.statusCode).toBe(404);
    });
    it('doit afficher que username est obligatoire',async()=>{
        const res=await request(app).put('/user/2').send({username:""});
        expect(res.statusCode).toBe(400);
    });

    it('doit afficher que username doit contenir  avoir au moins 3 caractères',async()=>{
        const res=await request(app).put('/user/1').send({username:"ab"});
        expect(res.statusCode).toBe(400);
    });

    it("doit afficher Ce username existe déjà la liste ",async()=>{
        const res=await request(app).put('/user/2').send({username:"test122"});
        expect(res.statusCode).toBe(400);
    });

});


describe('DELETE /user/:id',()=>{
    it('doit supprimer user avec l\'id saisi',async()=>{
    const res=await request(app).delete('/user/2');
        expect(res.statusCode).toBe(200);
    });

    it('course does not exist',async()=>{
    const res=await request(app).delete('/user/29');
        expect(res.statusCode).toBe(404);    
    });

})






