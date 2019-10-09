# server.js linea 18 =  app.use(express.static("src/controllers/public"));
# No existe "src/controllers/public"
Juan Manuel revisará si es necesario.


# --------------  Adaptacion código Fazt  -------------------------------------
https://www.youtube.com/watch?v=4clEduk6OQM&t=2614s

# En el minuto 29:11 utiliza >mysql en mi codigo no funciona.
¿Puede ser porqué el utiliza Linux?



# -----------------------------------------------------------------------------





# --------------  Adaptacion código Fazt Typescript & MySQL REST API (Nodejs & Express) usa mysql2  -------------------------------------
# No conecta al servidor de BBDD.
database.ts

# No hace falta body-parse.
Angular Mysql CRUD Tutorial, REST API Node & Typescript.
Minuto 44:40 de https://www.youtube.com/watch?v=lxYB79ANJM8&t=4912s

# No funciona el comando mysql en el terminal.
Angular Mysql CRUD Tutorial, REST API Node & Typescript.
Minuto 50:00

# ¿Utilizar mysql2 en lugar de promise-sql?
En Typescript & MySQL REST API (Nodejs & Express) usa mysql2
https://www.youtube.com/watch?v=4clEduk6OQM&t=2614s
https://www.npmjs.com/package/mysql2
https://www.npmjs.com/package/promise-mysql

# --------------------------------------------------------------------------







#  -------------------- RESUELTAS --------------------------------------------------------------------------------

# Cuando ejecutamos npm run start ¿Donde esta el script start?
Al usar Express buscará el fichero server.js y lo ejecutará por defecto sin tener que existir el script start. 

# ¿Porqué no actualiza package.json cuando instalo Typescript?
Typescript es incompatible con Sequalize. 
En ejemplo de Fazt también instala Typescript y no se refleja en el package.json.

# ¿Porque esta index.js en la carpeta models?
Lo usa Sequalize para iniciarse
