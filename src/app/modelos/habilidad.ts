export class Habilidad{
    id?:number;
    nombreHabilidad:String;
    porcentajeHabilidad:number;

    constructor(id:number, nombreHabilidad:String, porcentajeHabilidad:number){
        this.id=id;
        this.nombreHabilidad=nombreHabilidad;
        this.porcentajeHabilidad=porcentajeHabilidad;
    }
}