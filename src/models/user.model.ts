export interface IUser {
  idUser?: number | null;
  nombre?: string | null;
  apellido1?: string | null;
  apellido2?: string | null;
  email?: string | null;
  userName?: string | null;
  password?: string | null;
  avatarUrl?: string | null;
  observaciones?: string | null;
  createdAt?: Date;
  updatedAt?: Date ;
  idUserCreate?: number | null;
  idUserUpdate?: number | null;
}

export class User implements IUser {
  constructor(
    public idUser?: number | null,
    public nombre?:string | null,
    public apellido1?: string | null,
    public apellido2?: string | null,
    public email?: string | null,
    public userName?: string | null,
    public password?: string | null,
    public avatarUrl?: string | null,
    public observaciones?: string | null,
    public createdAt?: Date,
    public updatedAt?: Date,
    public idUserCreate?: number | null,
    public idUserUpdate?: number | null
  ) {
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
