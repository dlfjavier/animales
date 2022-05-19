const listaAnimales = {
    animales:[
  { tipo: 'Perro' },
  { tipo: 'Gato' },
  { tipo: 'Otro' },
    ],

    perros: function(){
      return this.animales.filter(animal => animal.tipo == "Perro")
    },
    gatos: function(){
      return this.animales.filter(animal => animal.tipo == "Gato")
    },
    otros: function(){
      return this.animales.filter(animal => (animal.tipo != "Perro" && animal.tipo != "Gato"))
    }
  }


module.exports = {

    lista: listaAnimales,

    
};