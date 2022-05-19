const assert = require('chai').assert;
const main = require('../main.js');
//const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies')

const { expect } = chai
chai.use(spies)


const lista = main.lista;
const perros = main.lista.perros();
const gatos = main.lista.gatos();
const otros = main.lista.otros();
const animales = main.animales;


    describe('Lista de animales', () => {
        it('es un objeto', () => {
          expect(lista).to.be.a('Object')
        });
    })
   
    describe('#perros', () => {
        it('devuelve los animales que son perros', () => {
          expect(lista.perros()).to.eql(perros)
        })
    })

    describe('#gatos', () => {
        it('devuelve los animales que son gatos', () => {
          expect(lista.gatos()).to.eql(gatos)
        })
      })
    
    describe('#otros', () => {
        it('devuelve los animales que no son perros ni gatos', () => {
            expect(lista.otros()).to.eql(otros)
        })

        it('determina los resultados utilizando Array.filter', () => {
          chai.spy.on(lista.animales, 'filter')  
          lista.otros()
          expect(lista.animales.filter).to.have.been.called()
        })
    })

