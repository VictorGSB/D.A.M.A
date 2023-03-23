function salario1(){

    let salario = parseFloat(prompt("Digite seu salario: "))

    let salarioD1 = salario * 0.1
    
    let salarioBase = salario - salarioD1

    let salarioD2  = salarioBase * 0.05

    let salarioLiquido = salarioBase - salarioD2
    
    
}

module.exports = {
    salario1
}

