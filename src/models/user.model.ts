export interface IUser {
    idUser?: number ;
    nombre?: string;
    apellido1?: string;
    apellido2?: string;
    email?: string;
    user_name?: string;
    password?: string;
    avatar_url?: string ;
    observaciones?: string ;
    time_create?: Date;
    time_update?: Date ;
    idUser_create?: number;
    idUser_update?: number;
  }
  
  export class User implements IUser {
    constructor(
      public idUser?: number,
      public nombre?: string,
      public apellido1?: string,
      public apellido2?: string,
      public email?: string,
      public user_name?: string,
      public password?: string,
      public avatar_url?: string,
      public observaciones?: string,
      public time_create?: Date,
      public time_update?: Date,
      public idUser_create?: number,
      public idUser_update?: number
    ) {
    // this.idUser = idUser ? idUser : null equivale a  if( idUser !== undefined) { return idUser} else {return null}
    // Si idUser es diferente de undefined coge el argumento que se pasa sino se define a NULL, es para evitar tener campos con undefined.
      this.idUser = idUser ? idUser : null;
      this.nombre = nombre ? nombre : null;
      this.apellido1 = apellido1 ? apellido1 : null;
      this.apellido2 = apellido2 ? apellido2 : null;
      this.email = email ? email : null;
      this.user_name = user_name ? user_name : null;
      this.password = password ? password : null;
      this.avatar_url = avatar_url ? avatar_url : null;
      this.observaciones = observaciones ? observaciones : null;
      // No iniciarlos a null para que tome los valores por defecto en MySQL.
      // this.time_create = time_create ? time_create : null;
      // this.time_update = time_update ? time_update : null;
      this.idUser_create = idUser_create ? idUser_create : null;
      this.idUser_update = idUser_update ? idUser_update : null;
          }
  }
  