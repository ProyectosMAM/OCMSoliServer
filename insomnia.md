

Insomnia.

GET  http://localhost:4000/api/v1/users/profile
POST http://localhost:4000/api/v1/users/signin
{
     "userName" : "w",
    "password" : "w"
}
PUT  http://localhost:4000/api/v1/users/162         UPDATE
{
    "nombre" : "Juan Manuel",
    "apellido1" : "Lopez",
    "apellido2" : "Lopez",
    "email" : "eeee@gmail.com",
    "userName" : "juanddddma",
    "password" : "juam0eee1",
    "avatarUrl" : "imagen.com",
    "observaciones" : "sin observaciones.",
    "idUserCreate" : 1,
    "idUserUpdate" : 1
}
DEL  http://localhost:4000/api/v1/users/158          DELETE
POST http://localhost:4000/api/v1/users              CREATE
{
    "nombre" : "Juan Manuel",
    "apellido1" : "Lopez",
    "apellido2" : "Lopez",
    "email" : "juanmaddnuel@gmail.com",
    "userName" : "juadddnma",
    "password" : "juam01",
    "avatarUrl" : "imagen.com",
    "observaciones" : "Observaciones para Juan Manuel.",
    "idUserCreate" : 1,
    "idUserUpdate" : 1
}
GET  http://localhost:4000/api/v1/users
GET  http://localhost:4000/api/v1/users/162


