# rol.controler.ts
Factura en euros
    ¿Diferencia entre usar Promise como hacemos en getRols y sin Promise?
    ¿Es mejor pasar una cadena SQL o hacerlo directamente en el Query? Peligro inyección de codigo.
    ¿Diferencia entre return.res....  y res unicamente?
    ¿Mejor estrategia para detectar errores, ejemplo de uso en deleteRol?
    # ¿Qué errores deberia controlar en users.service.ts?
    # Si no devuelvo nada no tengo informacion en component.ts
       https://www.codementor.io/zellliew/handling-errors-in-express-10oun71c6l?utm_swu=7100
    ¿Porque usar una function en la llamada a query de deleteRol?
    En cada consulta abrimos connect, ¿Es conveniente cerrarlo?
    const { fromRow, toRow, from = +fromRow, to = +toRow } = req.params; ¿Porque aqui los parametros son text y no number?


# Implatación de JsonWebToken
user.controller.ts Linea 50.

# Usar json en Linea 37 user.controller.ts  export async function createUser(req: Request, res: Response) {....
Pretendo pasar todas las consultas como una cadena al query.

# user.controllers.ts function signIn Linea 152.
¿Se puede hacer 
const user: any = rows[0] 
?

# ¿Se puede mejorar el codigo de user.controller.ts?
¿Función para que todas las validaciones sean comunes?

# Uso pool en database.ts

# user.controller.ts. Linea 9.
¿Como usar funciones de flecha?
Comparar en  Codigo: Fazt-nodejs-mysql-links.
link.js linea 11.


# ---------------------------- Utilidades a probar ------------------------
Para crear los models desde la BBDD.
https://github.com/sequelize/sequelize-auto






# --------------  Adaptacion código Fazt Typescript & MySQL REST API (Nodejs & Express) ---------------------------
https://www.youtube.com/watch?v=4clEduk6OQM&t=2614s

# En el minuto 29:11 utiliza >mysql en mi codigo no funciona.
¿Puede ser porqué el utiliza Linux?
https://www.neoguias.com/como-conectarse-mysql-desde-linea-comandos/
https://www.discoduroderoer.es/como-conectar-mysql-desde-la-consola-en-windows/

# ¿Como enviar fecha a  updatedAt?



# -----------------------------------------------------------------------------------------------------------------





# --------------  Adaptacion código Fazt Typescript & MySQL REST API (Nodejs & Express) usa mysql2  ---------------
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

# -----------------------------------------------------------------------------------------------------------------







#  -------------------- RESUELTAS ---------------------------------------------------------------------------------

# Cuando ejecutamos npm run start ¿Donde esta el script start?
Al usar Express buscará el fichero server.js y lo ejecutará por defecto sin tener que existir el script start. 

# ¿Porqué no actualiza package.json cuando instalo Typescript?
Typescript es incompatible con Sequalize. 
En ejemplo de Fazt también instala Typescript y no se refleja en el package.json.

# ¿Porque esta index.js en la carpeta models?
Lo usa Sequalize para iniciarse

# No da error cuando borro un user que ya no existe.
user.controller.ts. Linea 63.
Respuesta: MySQL no devuelve nada cuando se hace un delete aunque no exista el registro que se pide borrar.

# server.js linea 18 =  app.use(express.static("src/controllers/public"));
# No existe "src/controllers/public"
Juan Manuel revisará si es necesario.

# Factura en euros.
 NO es posible, no esta permitido en Argentina.

# ¿Es mejor pasar una cadena SQL o hacerlo directamente en el Query? Peligro inyección de codigo.
Es indiferente. Para evitar inyeccion lo mejor es usar un ORM.
https://www.npmjs.com/package/mysql2
https://phpdelusions.net/sql_injection

# En cada consulta abrimos connect, ¿Es conveniente cerrarlo?
https://www.npmjs.com/package/mysql2
Using connection pools
Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection, leaving them open instead of closing when you are done with them.
This improves the latency of queries as you avoid all of the overhead that comes with establishing a new connection.
  
 # const { fromRow, toRow, from = +fromRow, to = +toRow } = req.params; ¿Porque aqui los parametros son text y no number?
