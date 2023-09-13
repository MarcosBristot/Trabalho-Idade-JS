let anoAtual = prompt("Digite o ano atual: ")
let anoDeNascimento = prompt("Digite seu ano de Nascimento: ")

let anoAutomatico = new Date();

if (anoAtual == ""){
    anoAtual = anoAutomatico
}



function calculaIdade(anoAtual, anoDeNascimento){
    let anos = anoAtual - anoDeNascimento;

    if (anoDeNascimento <= anoAtual) {
        console.log("Você tem " + anos + " anos de idade!")
    } else if (anoDeNascimento == ""){
        console.log("Data inválida!")
    } else if (anoDeNascimento >= anoAtual){
        console.log("Data inválida!")
    }
}



calculaIdade(anoAtual,anoDeNascimento);
