(()=>{
    // Tipar una Promesa params : Promise<Type>
    const retirarDinero = (montoRetirar:number) : Promise<number> =>{
        let dineroActual = 1000;
        return new Promise( (resolve, reject)=>{
            if(montoRetirar > dineroActual){
                reject('No hay dinero suficiente');
            }else{
                dineroActual -= montoRetirar;
                // Una vez realizado el calculo ideal se llama el resolve.
                // No es necesario retornar algo en el
                resolve(dineroActual);
            }
        });
    }
    // Llamar la resolucion o reject de la promesa
    retirarDinero(1500).then(montoActual => console.log(`Me queda ${montoActual}`)).catch(
        err => console.warn(err)
    );
}
)();
