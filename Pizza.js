
// export default ó abajo
class Pizza{

constructor(masa,tamano,ingredientes){
this.masa=masa;// Recibe el parámetro del constructor
this.tamano=tamano; // this hace referencia
this.ingredientes=ingredientes;
/**   this hace referencia al atributo- método de la misma clase  */
}// fin constructor
preparar(){
console.log(`Preparando pizza ${this.tamano},${this.masa},Ingredientes: 
${this.ingredientes}`);
return this;
}// fin preparar

hornear(){
console.log('La pizza está en el horno..!');
return this;
} // fin hornear

empacar(){
console.log('Empacando  la pizza.....');
console.log('Pizza lista para ser enviada..!');
return this;
} 

}// fin definición

export default  Pizza;
/*
const pizzaHawallana= new Pizza("Masa Gruesa","Tamaño Medio",["pina","Queso","Peperoni"]);
console.log(pizzaHawallana.preparar());
console.log(pizzaHawallana.hornear());
console.log(pizzaHawallana.empacar());
*/

