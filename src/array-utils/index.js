const prompt = require("prompt-sync")()

//1
function salario1(){

    let salario = Number(prompt("Digite seu salario: "))

    let salarioD1 = salario * 0.1
    
    let salarioBase = salario - salarioD1

    let salarioD2  = salarioBase * 0.05

    let salarioLiquido = salarioBase - salarioD2
    
    return ("Seu salario liquido é: "+ salarioLiquido.toFixed(2))    
}

//2
function automovel(){

    let tempo = Number(prompt("Digite o tempo gasto na sua viagem em horas: "))
    let velocidade = Number(prompt("Digite a velocidade media durante o percurso: "))
    
    let distancia = tempo * velocidade

    let litros_usados = distancia / 12
    return(`/A velocidade foi de:  ${velocidade}KM /O tempo gasto foi de: ${tempo}H / A distancia foi de: ${distancia}KM /A quantidade de litros gastos foi de: ${litros_usados.toFixed(2)}LT`)


}

//3
function matricula(){

    let numMatricula = prompt("Digite o numero da matricula (na forma de AASDDD):")

    let ano = Number(numMatricula.substring(0,2))

    let semestre = Number(numMatricula.substring(2,3))

    if(semestre === 1){

        return(`O aluno foi matriculado no 1° semestre do ano ${ano}`)

    }else if(semestre === 2){

        return(`O aluno foi matriculado no 2° semestre do ano ${ano}`)

    }else{

        return("Matricula invalida...")
    }

}

//4
function triangulo()
{

    let lado1 = Number(prompt("Digite o valor do 1° lado do triangulo: "))
    let lado2 = Number(prompt("Digite o valor do 2° lado do triangulo: "))
    let lado3 = Number(prompt("Digite o valor do 3° lado do triangulo: "))

    if(lado1 == lado2 && lado2 == lado3){

        return("Esse é um triangulo equilatéro ")

    }else if(lado1 == lado2 || lado1 == lado3 || lado3 == lado2 ){


        return ("Esse é um triangulo isósceles")

    }else{
        return("Esse é um triangulo escaleno")
    }
        
    }

    //5
    function numeros(){

        let numero1 = Number(prompt("Digite o 1° valor: "))
        let numero2 = Number(prompt("Dgite o 2° valor: "))
        let numero3 = Number(prompt("Digite o 3° valor: "))

        let primeiro;
        let segundo;
        let terceiro;

        if(numero3 > numero2 && numero2 > numero1){

            primeiro = numero3
            segundo = numero2
            terceiro = numero1

        }else if(numero3 > numero2 && numero2 < numero1 && numero3 > numero1){

            primeiro = numero3
            segundo = numero1
            terceiro = numero2

        }else if(numero3 > numero2 && numero2 < numero1 && numero3 < numero1){

            primeiro = numero1
            segundo = numero3
            terceiro = numero2

        }else if(numero3 < numero2 && numero2 > numero1 && numero1 > numero3){

            primeiro = numero2
            segundo = numero1
            terceiro = numero3

        }else if(numero3 < numero2 && numero2 > numero1 && numero1 < numero3){

            primeiro = numero2
            segundo = numero3
            terceiro = numero1

        }else if(numero3 < numero2 && numero2 < numero1){
            primeiro = numero1
            segundo = numero2
            terceiro = numero3

        }else if(numero3 < numero1 && numero1 > numero2 && numero3 > numero2 ){

            primeiro = numero1
            segundo = numero3
            terceiro = numero2

        }else if(numero3 < numero1 && numero1 > numero2 && numero2 > numero3){

            primeiro = numero1
            segundo = numero2
            terceiro = numero3

        }else if(numero3 < numero1 && numero1 < numero2){
            primeiro = numero2
            segundo = numero1
            terceiro = numero3

        }

        return (`A ordem crescente dos numeros é ${terceiro}, ${segundo}, ${primeiro}`)
    }

//6
function provas(){

    let matematica = Number(prompt("Digite sua nota de matematica: "))
    let portugues = Number(prompt("Digite sua nota de Portugues: "))
    let conhecimentosGerais = Number(prompt("Digite sua nota de Conhecimentos Gerais: "))

    let media = (matematica + portugues + conhecimentosGerais) / 3
    let aprovado = 7
    let reprovado = 5

    if(matematica >= aprovado && portugues >= aprovado && conhecimentosGerais >= aprovado ){

        return(`Parabens voce foi aprovado, sua media foi de ${media.toFixed(2)}`)

    }else if(matematica <= reprovado && portugues <= reprovado && conhecimentosGerais <= reprovado){

        return(`Voce foi reprovado..., sua media foi de ${media.toFixed(2)}`)

    }else if( matematica > reprovado && matematica < aprovado && portugues > reprovado && portugues < aprovado && conhecimentosGerais > reprovado && conhecimentosGerais < aprovado){

        return(`Voce foi reprovado..., sua media foi de ${media.toFixed(2)}`)

    }else if(media >= aprovado){

        return(`Parabens voce foi aprovado, sua media foi de ${media.toFixed(2)}`)

    }else{

        return(`Voce foi reprovado..., sua media foi de ${media.toFixed(2)}`)

    }
    
    
}


//7
function soma(){
    let numeroA = Number(prompt("Digite o 1° numero: "))
    let numeroB = Number(prompt("Digite o 2° numero: "))
    let numeroC = Number(prompt("Digite o 3° numero: "))

    let somaNum = numeroA + numeroB

    if(somaNum < numeroC){

        return ("A soma do 1° e 2° numero é menor que o 3° numero")

    }else if(somaNum > numeroC){

        return ("A soma do 1° e 2° numero é maior que o 3° numero ")

    }else if(somaNum == numeroC){

        return ("A soma do 1° e 2° numero é igual ao 3° numero")

    }

}

//8




module.exports = {
    salario1, automovel, matricula, triangulo, numeros, provas, soma
}

