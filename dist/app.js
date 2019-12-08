"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
var cors = require("cors");
// Routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const rol_routes_1 = __importDefault(require("./routes/rol.routes"));
const userRol_routes_1 = __importDefault(require("./routes/userRol.routes"));
const solicitud_routes_1 = __importDefault(require("./routes/solicitud.routes"));
const delegacion_routes_1 = __importDefault(require("./routes/delegacion.routes"));
const documento_routes_1 = __importDefault(require("./routes/documento.routes"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
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
    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }
    // https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498
    // https://expressjs.com/es/guide/writing-middleware.html
    middlewares() {
        this.app.use(morgan_1.default('common'));
        this.app.use(express_1.default.json());
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
    }
    routes() {
        this.app.use('/api/v1/users', user_routes_1.default);
        this.app.use('/api/v1/rols', rol_routes_1.default);
        this.app.use('/api/v1/userRols', userRol_routes_1.default);
        this.app.use('/api/v1/solicitudes', solicitud_routes_1.default);
        this.app.use('/api/v1/delegaciones', delegacion_routes_1.default);
        this.app.use('/api/v1/documentos', documento_routes_1.default);
        this.app.use((err, req, res, next) => {
            console.log('Middleware error: ' + err.stack);
            console.log('Middleware error: ' + res);
            next();
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map