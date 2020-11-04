// Interfaces para evitar cambiar el nombre de una propiedad de un Objeto
(()=>{

    // Intarfaces, reglas para que un objeto cumpla la Interface
    // Tipados que tienen ciertas cosas
    interface Xmen {
        nombre:string;
        edad:number;
        poder?:string; // con el ? se declara opcional este atributo
    }

    // Enviar mision
    const enviarMision = (xmen: Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    // Definir el tipo de Objeto para que cumpla la condicion de la Interface
    const wolverine:Xmen = {
        nombre: 'Logan',
        edad: 30
    }
     const regresarMision = (xmen: Xmen) => {
        console.log(`Regresando a ${xmen.nombre} a la mision`);
    }

    enviarMision(wolverine);
    regresarMision(wolverine);
})();
