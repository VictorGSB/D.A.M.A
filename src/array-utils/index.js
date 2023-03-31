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
    return (`O ano de matricula foi em ${ano}`)

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

    }else if(matematica < reprovado || portugues < reprovado || conhecimentosGerais < reprovado){

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

function NumConta(){

    let conta = prompt("Digite o número da conta:");

    let soma = 0;
    for (let i = 0; i < conta.length; i++) {
      soma += parseInt(conta.charAt(i));
    }
    
    let digito = soma % 10;
    
    if(conta <= 9999){

        return("Número de conta completo: " + "00" + conta + "-" + digito);

    }else if(conta <= 99999){

        return("Número de conta completo: " + "0" + conta + "-" + digito);

    } else if(conta <= 999999){

        return("Número de conta completo: "+ conta + "-" + digito);

    }else if( conta > 999999){

        return("Essa conta nao exite :(");

    }
    

}

//9
function habitantes(){


    let somaSalario = 0
    let maiorIdade = 0
    let menorIdade = Infinity
    let qtdeMulheresSalarioBaixo = 0
    let qtdePessoas = 0
    
    while (true) {
        
      const idade = parseInt(prompt("Digite a idade (ou um número negativo para sair):"));

      if (idade < 0) {
        break;
      }
    
      const sexo = parseInt(prompt("Digite o sexo (0 para masculino, 1 para feminino):"));
      const salario = parseFloat(prompt("Digite o salário:"));
    
      somaSalario += salario;
      qtdePessoas++;
    
      if (idade > maiorIdade) {
        maiorIdade = idade;
      }
    
      if (idade < menorIdade) {
        menorIdade = idade;
      }
    
      if (sexo === 1 && salario <= 100) {
        qtdeMulheresSalarioBaixo++;
      }
    }
    
    const mediaSalario = somaSalario / qtdePessoas;
    
    return(`Média de salário do grupo: R$${mediaSalario.toFixed(2)}/ Maior idade do grupo: ${maiorIdade} anos/ Menor idade do grupo: ${menorIdade} anos/ Quantidade de mulheres com salário até R$100,00: ${qtdeMulheresSalarioBaixo}`);
    

}           



//10
function frase(){

    let palavra = prompt("Digite uma palavra: ")

    let ap = 0
    let ag = 0 

    for(let i = 0; i < palavra.length; i++) {

        if(palavra[i] == 'a'){

            ap++

            

        }else if(palavra[i] == "A"){

            ag++

        }else {

        }  
        
    }
    return(`Foram digitados ${ap} letra(s) (a) e ${ag} leta(s) (A) `)


}

//11

function letraJ(){

    let frase = prompt("Digite uma frase: ")

    let j = frase.indexOf("j")

        if(j === -1){

            return ("A letra 'j' não foi encontrada na frase")

        }else{
            return (`A letra j esta na posição ${j + 1} da frase`)
        }
    
        // o + 1 foi adicionado para que as posiçoes nao fique em numeros naturais pois se nao acrecentar a palavra 
        // jogo por exemplo, o j de jogo apareceria na posição 0 e nao na 1 ai por motivos de estetica eu coloquei o + 1
}





module.exports = {
    salario1, automovel, matricula, triangulo, numeros, provas, soma, NumConta, habitantes, frase, letraJ
}
