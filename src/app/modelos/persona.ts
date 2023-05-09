export class Persona{
    id?:number;
    nombreCompleto:String;    
    fotoPerfil:String;    
    acercaDe1:String;
    acercaDe2:String;
    acercaDe3:String;
    puesto:String;
    mail: String;
    linkedin: String;
    github: String;
    facebook: String;
    twitter: String;
    footer1: String;
    footer2: String;

    constructor(nombreCompleto:String ,fotoPerfil:String, acercaDe1:String, acercaDe2:String, acercaDe3:String, puesto:String, mail:String, linkedin:String, github:String, facebook:String, twitter:String, footer1:String, footer2:String){
        this.nombreCompleto=nombreCompleto;
        this.fotoPerfil=fotoPerfil;
        this.acercaDe1=acercaDe1;
        this.acercaDe2=acercaDe2;
        this.acercaDe3=acercaDe3;
        this.puesto=puesto;
        this.mail=mail;
        this.linkedin=linkedin;
        this.github=github;
        this.facebook=facebook;
        this.twitter=twitter;
        this.footer1=footer1;
        this.footer2=footer2;
    }
    
}