import Pizza from './Pizza.js';
class Combo extends Pizza {
constructor(combo,cantidad,tamano,masa,ingredientes,bebida,postre){
super(masa,tamano,ingredientes);// constructor de l clase padre(base,principal)
this.combo=combo;
this.cantidad=cantidad;
this.tamano=tamano;
this.masa=masa;
this.ingredientes=ingredientes;
this.bebida=bebida;
this.postre=postre;
}// fin del constructor clase Combo
elegirCombo(){
this.preparar();
this.hornear();
this.empacar();
console.log(`Pedido : Combo ${this.combo}-${this.cantidad} Pizza tamaño ${this.tamano}
 ${this.masa }  de  ${this.ingredientes}  +    ${this.bebida} + ${this.postre}`);
return this;
}// fin elegir combo
}// fin class
// crear n objetos
console.log();

const Pedido1 = new Combo("Combo 1",2,"Pizza Mediana","Borde de queso",
["queso","champiñones","aceitunas","Jamón"],"Colombiana","Torta de chocolate");
console.log(Pedido1.elegirCombo());
export default Combo;
