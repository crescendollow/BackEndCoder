import {ProductManager} from './ProductManager';

let Lista = new ProductManager()

let primeraConsultaProd = await Lista.getProducts();
console.log(primeraConsultaProd);

let user = {
    title:"Producto1",
    description:"Descripcion1",
    price:1000,
    thumbnail:"Link1",
    stock:8000
}

let result = await Lista.crearProducto(user);
console.log(result);
let segundaConsultaUsuarios = await Lista.crearProducto();
console.log(segundaConsultaUsuarios);