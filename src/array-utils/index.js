const prompt = require("prompt-sync")()
function salario1(){

    let salario = Number(prompt("Digite seu salario: "))

    let salarioD1 = salario * 0.1
    
    let salarioBase = salario - salarioD1

    let salarioD2  = salarioBase * 0.05

    let salarioLiquido = salarioBase - salarioD2
    
    return ("Seu salario liquido é: "+ salarioLiquido.toFixed(2))    
}

module.exports = {
    salario1
}

