// export function inspect() {
//     return function (
//         target: any,
//         propertyKey: string,
//         descriptor: PropertyDescriptor
//     ) {
//         const metodoOriginal = descriptor.value;
//         descriptor.value = function (...args: any[]) {
//             console.log(`--- Método: ${propertyKey}`);
//             console.log(`----- Parâmetros: ${JSON.stringify(args)}`);
//             const retorno = metodoOriginal.apply(this, args);
//             console.log(`----- Parâmetros ${JSON.stringify(retorno)}`);
//             return retorno;
//         };
//         return descriptor;
//     };
// };
//Refatorando a função
//Apenas se a função inpect() NÃO precisar de PARAMETROS!
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`);
        console.log(`----- Parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`----- Parâmetros ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
