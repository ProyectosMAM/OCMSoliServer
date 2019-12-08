# Nodejs & DigitalOcean | Subida de Aplicacion con SSH, PM2 y nginx
https://www.youtube.com/watch?v=gmfUNDmJDuk

https://itnext.io/deploy-a-nodejs-and-expressjs-app-on-digital-ocean-with-nginx-and-free-ssl-edd88a5580fa






# Ejemplos a considerar:
    https://github.com/BraisC/Marvel-database/blob/master/src/js/models/Comic.js
    https://www.npmjs.com/package/axios
    https://developer.marvel.com/documentation/apiresults

    https://www.npmjs.com/package/create-backend?fbclid=IwAR3cozDILsFxfF11lWu82VnogM2CLhWEK873ejib1tdKMEkthuZJSGdSkW4



# Better practices
https://medium.com/better-practices/design-apis-like-you-design-user-experience-a7adeb2ee90f
https://cloud.google.com/apis/design/
https://developers.google.com/analytics/devguides/reporting/core/v3/errors?hl=es


# Implementar JWT
https://www.npmjs.com/package/jsonwebtoken
https://www.oscarblancarteblog.com/2018/01/16/implementar-json-web-tokens-nodejs/
https://blog.angular-university.io/angular-jwt-authentication/
https://jwt.io/home/
# ---------------------------------------------------------------------------------------------------------------

# Autentificación basada en Fazt Typescript & Nodejs, REST API JSON Web Tokens. •6 oct. 2019.
Codigo: C:\Users\pc\Google Drive\Angular\Fazt-typescript-mysql-rest
https://www.youtube.com/watch?v=qVUr4YC6ZXA&t=13s

Minuto 03:00
Instala npm i typescript -D
npx tsc --init. 
Crea tsconfig.json

Minuto 06:00 
Instala concurrently para poder ejecutar dos comandos a la vez.
npm i concurrently -D
"scripts": {
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  },

Minuto 39:00
 Instala jsonwebtoken.

 Minuto 40:40
 Instala dotenv.

 Minuto 43:20
 Crea y utiliza token.

Minuto 47:40 https://youtu.be/qVUr4YC6ZXA?t=2865
Encriptar password.
Usa bcriptjs

Minuto 01:00:50 https://youtu.be/qVUr4YC6ZXA?t=3652
Usa JWT

Minuto Validaciones 01:18:00
- express-validator
- https://express-validator.github.io/docs/index.html
- 
- joi hapi
- https://hapi.dev/family/joi/?v=16.1.7
# ---------------------------------------------------------------------------------------------------------------

# Basado en Fazt Typescript & MySQL REST API (Nodejs & Express) •1 may. 2019
https://www.youtube.com/watch?v=4clEduk6OQM&t=2614s
# ---------------------------------------------------------------------------------------------------------------

# Autentificación basada en Nodejs y Mysql, Aplicación Completa (Login, Registro, CRUD, ES6+ y Más ). •Diciembre 2018.
Codigo: Fazt-nodejs-mysql-links.
https://www.youtube.com/watch?v=qJ5R9WTW0_E

Minuto 06:47 
Instala express, express-handlebars, express-session, express-mysql-session, morgan,
bcryptjs, body-parser, connect-flash, express-validator, passport, passport-local, timeago.js
nodemon -D

Minuto 42:54
Crea tabla y FOREIGN KEY

Minuto 47:05
createPool en lugar de createConnection

Minuto 1:10:26 https://youtu.be/qJ5R9WTW0_E?t=4226
Recibe los datos del formulario.

Minuto 1:12:40
Usa destructuring en link.js

`router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/links');
});`

Minuto 1:25:00
Usa timeago para pasar timestamp a fecha legible.

Minuto 1:53:30 
Mensages de confirmación acciones con connect.flash.
https://github.com/jaredhanson/connect-flash
Muy antigüo,hace 7 años que no se actualiza.


 Minuto 2:11:30 https://youtu.be/qJ5R9WTW0_E?t=7890
SignUp user

 Minuto 2:19:30 https://youtu.be/qJ5R9WTW0_E?t=8370
Uso de passport.

https://www.npmjs.com/package/passport
Ultima actualización hace 2 años.

 Minuto 2:35:19 https://youtu.be/qJ5R9WTW0_E?t=9319
Uso de bcryptjs

https://www.npmjs.com/package/bcryptjs
Ultima actualización hace 3 años.

Minuto 2:50:56 SignIn User.  https://youtu.be/qJ5R9WTW0_E?t=10256

Minuto 3:12:14 Protecting routes. https://youtu.be/qJ5R9WTW0_E?t=11534
# ---------------------------------------------------------------------------------------------------------------

# Angular Mysql CRUD Tutorial, REST API Node & Typescript. 26 diciembre 2018.
https://www.youtube.com/watch?v=lxYB79ANJM8&t=6983s

# 01. Diseño de APIs: Estructura de nuestro proyecto (Capas y configuración). 1 abril 2019.
Codigo: 
https://www.youtube.com/watch?v=gc-v3_LDjPk&list=PLzHaXzj_WAyn-kfjTcXJP3PMjS2I-QA0c






 ![Tux, the Linux mascot](https://picsum.photos/200/300)
 