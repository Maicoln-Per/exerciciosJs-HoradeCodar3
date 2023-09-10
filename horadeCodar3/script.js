//Exercício 1

//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

function exercicio1(){
    window.alert(`Divisão`);
    let numerador = Number.parseFloat(prompt(`Informe o numerador: `));
        let denominador = Number.parseFloat(prompt(`Informe o denominador: `));
        if (denominador <= 0) {
        window.alert(`Impossível realizar uma divisão por 0, informe um denominador maior que 0.`);
        } else {
            let resultado = numerador/denominador;
            window.alert(`${numerador}/${denominador} = ${resultado.toFixed(2)}`);
         }
}

//Exercício 2

// 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

function exercicio2() {
    for (let bomba = 30; bomba >= 0; bomba--) {
        window.document.write(`<h4>Contagem para explodir: ${bomba}</h4>`);
        if(bomba == 0) {
            window.document.write(`<h1>EXPLOSÃO</h1>`)
        }
    }
}

//Exercício 3

// 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

function exercicio3() {
    for(let decrescente = 10; decrescente >= 1; decrescente--) {
        window.document.write(`${decrescente}  `);
    }
}

//Exercício 4

// 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

function exercicio4() {
    let numerosInt = [];
    let soma = 0;
    let contador = 0;
    for (let i = 15; i <= 100; i++){
        numerosInt.push(i);
        soma += i;
        contador++;
    }
    let media = soma/contador
    window.document.write(`${numerosInt.join(' + ')}`);
    window.document.write(`<br>A média é: ${media}`);
}

//Exercício 5

// 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

function exercicio5() {
    window.alert('Calcular e escrever a média aritmética dos dois números inteiros informados por você e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. Considere que o primeiro sempre será menor que o segundo.');
    let numero1 = Number.parseInt(prompt(`Informe o primeiro número: `));
    let numero2 = Number.parseInt(prompt(`Informe o segundo número: `));
    if(numero1 > numero2){
        window.alert('Erro, número 1 maior que número 2');
        return exercicio5();
    } else {
        let numerosArray = [];
        let soma = 0;
        let contador = 0;
        for(let i = numero1; i <= numero2; i++) {
            numerosArray.push(i);
            soma += i;
            contador++;
        }
        let media = soma/contador
        window.document.write(`${numerosArray.join(' + ')}`);
        window.document.write(`<br>A soma total dos números é: ${soma}`);
        window.document.write(`<br>A média é: ${media}`);
    }
}

//Exercício 6

// 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

function exercicio6() {
//Pega os valores das duas notas:
        window.alert("Nota de aprovação é 9,5");
        let nota1 = Number.parseFloat(prompt(`Informe a primeira nota: `));
        let nota2 = Number.parseFloat(prompt(`Informe a segunda nota: `));
        let aluno = 0;
        //Faz o cálculo da média:
        let media = (nota1 + nota2) / 2;

        //Se a nota for maior ou igual a 9.5, ele dispara um alert e atribui +1 ao números de alunos aprovados:
        if(media >= 9.5){
            window.alert("Aprovado!");
            aluno++;       
        } else {
            window.alert("Reprovado!");
        }
        //Faz a pergunta para o usuário, caso a resposta seja sim(S), a condição do while será válida.
        let pergunta = prompt("Deseja calcular a média de uma nota? S/N: ");
        //A cada resposta sim do usuário, o while se repetirá:
        while (pergunta == "S") {
            let nota1 = Number.parseFloat(prompt("Escreva a primeira nota: "));
            let nota2 = Number.parseFloat(prompt("Escreva a segunda nota: "));
            resultado = (nota1 + nota2) / 2;            
            
            //Verifica novamente a nota:
            if(resultado >= 9.5) {
                alert("Aprovado!");
                aluno++;       
            } else {
                alert("Reprovado!");
            }
            
            //Faz novamente a pergunta para validar a condição do while:
            pergunta = prompt("Deseja avaliar outro aluno? S/N");
        }

    window.alert(`Número de alunos aprovados: ${aluno}`);
    document.write(`Número de alunos aprovados: ${aluno}`);
}

//Exercício 7

// 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

function exercicio7() {

    /* Criamos um array vazio chamado notas para armazenar as notas do aluno. */
    let notas = [];
    /* Inicializamos a variável soma com zero para armazenar a soma das notas. */
    let soma = 0;
    /* Usamos um loop for para iterar seis vezes, uma para cada nota. */
    for (let i = 0; i < 6; i++) {
        let nota = Number.parseFloat(prompt(`Digite a nota ${i + 1}: `));
        /* Em seguida, verificamos se a nota está dentro do intervalo válido (0 a 10) e se é um número válido usando o while */
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            /* Se a nota estiver fora do intervalo ou se não for um número válido, pedimos ao usuário para digitar novamente. */
            nota = Number.parseFloat(prompt(`Valor inválido! Digite a nota ${i + 1}: `));
        }
        /*Se a nota for válida, adicionamos ao array notas e somamos à variável soma. */
        notas.push(nota);
        soma += nota;
    }
    let media = soma / 6;
    window.alert(`A média das notas é: ${media.toFixed(2)}`);
}

//Exercício 8

/* 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
N  é um valor informado pelo usuário */

function exercicio8() {
    let N = 0;
    do {
         N = Number.parseInt(prompt('Informe um número maior que 0:'));
    } while (N <= 0);
    for(let i = 1; i <= N; i++){
        window.document.write(`${i} de ${N}. <br>`)
    }
}

//Exercício 9

/* 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */

function exercicio9() {
    for(let i = 100; i <= 110; i++){
        window.document.write(`${i + 1} <br>`);
    }
}

//Exercício 10

/* 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */

function exercicio10() {
    let N = Number.parseInt(prompt('Informe a quantidade de tabuadas que deseja:'));
    for(let i = 0; i <= N; i++) {
        window.document.write(`<br>Tabuada do ${i}: <br>`);
        for(j = 1; j <= 10; j++) {
            window.document.write(`${i} x ${j} = ${i * j} <br>`);
        }
        window.document.write('----------------------');
    }
}

//Exercício 11

/* 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. */

function exercicio11() {
/* Inicializamos duas variáveis, valoresDentroIntervalo e valoresForaIntervalo, com o valor zero. Essas variáveis serão usadas para contar a quantidade de valores dentro e fora do intervalo.
 */
    let valoresDentroIntervalo = 0;
    let valoresForaIntervalo = 0;
/* Em seguida, usamos um loop for para solicitar ao usuário que insira 10 valores. A função prompt é usada para exibir uma caixa de diálogo onde o usuário pode inserir um valor. O valor inserido é armazenado na variável valor após ser convertido para um número decimal usando parseFloat. */
    for (let i = 0; i < 10; i++) {
    let valor = parseFloat(prompt("Digite um valor:"));
/* Dentro do loop, verificamos se o valor está dentro do intervalo de 24 a 42, incluindo os valores 24 e 42. Se estiver, incrementamos a variável valoresDentroIntervalo em 1. Caso contrário, incrementamos a variável valoresForaIntervalo em 1. */
    if (valor >= 24 && valor <= 42) {
        valoresDentroIntervalo++;
    } else {
        valoresForaIntervalo++;
    }
    }
/* Após o loop, usamos a função console.log para exibir a quantidade de valores dentro do intervalo e a quantidade de valores fora do intervalo. Usamos template literals (``) para incorporar as variáveis nas strings e formatar a saída. */
    window.document.write(`Valores dentro do intervalo: ${valoresDentroIntervalo}`);
    window.document.write(`<br>Valores fora do intervalo: ${valoresForaIntervalo}<br>`);
}