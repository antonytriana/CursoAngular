(() =>{
    //const sumar = (a: number, b: number):number =>{
    //    return a + b;
    //}

    const sumar = (a: number, b: number):number => a+b;
    console.log(sumar(1,2));

    const nombre = ():string => 'Hola mundo';

    const obtenerSalario = ():Promise<string>=> {
        return new Promise( (resolve, reject)=>{
            resolve('as');
        } );
    }

    obtenerSalario().then(a=>console.log(a.toUpperCase()));

})();
