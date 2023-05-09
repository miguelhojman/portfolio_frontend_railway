export class Experiencia{
    id:number;
    empresa: String ;  
    rubro: String ;
    periodo: String ;
    tarea: String ;

    constructor( id:number,empresa: String,rubro: String,periodo: String,tarea: String){

        this.id=id;
        this.empresa=empresa;
        this.rubro=rubro;
        this.periodo=periodo;
        this.tarea=tarea;
    }
}