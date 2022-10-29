// SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;

contract CuentaAhorro {
    //Ingresar Saldo
    //Retirar Saldo


//Generamos un struct definiendo los datos que guardará de cada cuenta
    struct Persona{
        string nombre;
        address cuenta;
    }

    mapping(address => Persona) personas;

    //Variable Inicial  (Se ejecuta solo la primera vez y el resto se va agregando a la cantidad)
    uint saldo = 0;

    //Funcion para Ingresar saldo
    function ingresarSaldo (uint valorIngresar)public {
        saldo = saldo + valorIngresar;
    }

    //Funcion para Retirar Saldo
    function retirarSaldo(uint valorRetirar)public {
        require(saldo >= valorRetirar, "No tienes esa cantidad en tu cuenta para retirar");
        saldo = saldo - valorRetirar;
    }
    

    //Funcion para Consultar Saldo
    function consultarSaldo()public view returns (uint){
        return saldo;
    }
}