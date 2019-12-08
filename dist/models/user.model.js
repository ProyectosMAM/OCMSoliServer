"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(idUser, nombre, apellido1, apellido2, email, userName, password, avatarUrl, observaciones, createdAt, updatedAt, idUserCreate, idUserUpdate) {
        this.idUser = idUser;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.avatarUrl = avatarUrl;
        this.observaciones = observaciones;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.idUserCreate = idUserCreate;
        this.idUserUpdate = idUserUpdate;
        // this.idUser = idUser ? idUser : null equivale a  if( idUser !== undefined) { return idUser} else {return null}
        // Si idUser es diferente de undefined coge el argumento que se pasa sino se define a NULL, es para evitar tener campos con undefined.
        // ¿Si definimos en la misma BBDD como default NULL en todos estos campos, esto sobra?
        this.idUser = idUser ? idUser : null;
        this.nombre = nombre ? nombre : null;
        this.apellido1 = apellido1 ? apellido1 : null;
        this.apellido2 = apellido2 ? apellido2 : null;
        this.email = email ? email : null;
        this.userName = userName ? userName : null;
        this.password = password ? password : null;
        this.avatarUrl = avatarUrl ? avatarUrl : null;
        this.observaciones = observaciones ? observaciones : null;
        // No iniciarlos a null para que tome los valores por defecto en MySQL.
        // this.createdAt = createdAt ? createdAt : null;
        // this.updatedAt = updatedAt ? updatedAt : null;
        this.idUserCreate = idUserCreate ? idUserCreate : null;
        this.idUserUpdate = idUserUpdate ? idUserUpdate : null;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map