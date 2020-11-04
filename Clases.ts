(()=>{
class Avenger{

    /* Si definimos las propiedades en TypeScript y no la usamos
        para Javascript es como si no la definieramos
    */
    //nombre: string = 'Sin nombre';
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number;

}

    //const antMan: Avenger = new Avenger();
    const antMan = new Avenger();
    console.log(antMan);
})();
