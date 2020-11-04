// Un decorador sirve para añadirle funcionalidades a las clases

function imprimirConsola(constructorClase: Function){
    console.log(constructorClase);
}

@imprimirConsola
export class Xmen{
    constructor(
        public nombre: string,
        public clave: string
    ){}

    imprimirConsola(){
        console.log(`${this.nombre} - ${this.clave}`);
    }
}
