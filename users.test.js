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





