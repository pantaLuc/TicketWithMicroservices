import request from 'supertest';
import {app} from '../../app'
import { Password } from '../../utilities/pass-hashing';

it('returns a 201  on succesfull signup' , async ()=>{

    return request(app)
            .post('/api/users/signup')
            .send({
                email:"pantaluc@gmail.com",
                password:"password"
            })
            .expect(201);

});

it('return a 400 on with an invalid email' , async ()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
           email:'pantalucgmail.com',
           password:'password'
        }).expect(400);
});

it('return a 400  with an invalid password' , async ()=>{
    return request(app)
        .post('/api/users/signup')
        .send({
           email:'pantaluc@gmail.com',
           password:'pa'
        }).expect(400);
})

it('return a 400  with  missing email and password ' , async ()=>{
    await request(app)
                  .post('/ai/users/signup')
                  .send({
                       email:'lucapameni@gmail.com',
                       password:'p'  
                  }).expect(400);   
    
     await request(app)
        .post('/api/users/signup')
        .send({
           email:'',
           password:'panta'
        }).expect(400);
}) ;

it('non duplicated email' ,async ()=>{

    await request(app)
            .post('api/users/signup')
            .send({
                email:'pantaluc@gmail.com',
                password:'panta',
            }).expect(201)

    await request(app)
            .post('api/users/signup')
            .send({
                email:'pantaluc@gmail.com',
                password:'panta'
            }).expect(400)
});
it(' check the cookies ', async ()=>{
   
    const response=await request(app)
                         .post('api/users/signup')
                         .send({
                             email:'pantaluc@gmail.com',
                             password:'panta'
                         })
                         .expect(201);
                
     expect(response.get('Set-Cookie')).toBeCalled()   
})