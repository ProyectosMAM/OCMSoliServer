import express, { Application } from 'express'
import morgan from 'morgan'
import passport from 'passport'
var cors = require("cors");

// Routes
import UserRoutes from './routes/user.routes'
import rolRoutes from './routes/rol.routes'
import userRolRoutes from './routes/UserRol.routes'
import solicitudRoutes from './routes/solicitud.routes'
import delegacionRoutes from './routes/delegacion.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.app.use(cors());
        this.app.options('*', cors());
        //    this.app.use(function(req, res, next) {
        //         res.header("Access-Control-Allow-Origin", "*");
        //         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //         // res.header("Access-Control-Allow-Credentials", new[] { "true" });
        //         res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
        //         next();
        //     });
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    // https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498
    // https://expressjs.com/es/guide/writing-middleware.html
    private middlewares() {
        this.app.use(morgan('common'));
        this.app.use(express.json());
        this.app.use(passport.initialize());
        this.app.use(passport.session());
   }

    private routes() {
        this.app.use('/api/v1/users', UserRoutes);
        this.app.use('/api/v1/rols', rolRoutes);
        this.app.use('/api/v1/userRols', userRolRoutes);
        this.app.use('/api/v1/solicitudes', solicitudRoutes);
        this.app.use('/api/v1/delegaciones', delegacionRoutes);

        this.app.use((err, req, res, next) => {
            console.log('Middleware error: ' + err.stack);                     
            console.log('Middleware error: ' + res);   
            next();      
      });
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}