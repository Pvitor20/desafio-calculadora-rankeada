let vitorias;
let vitoriasInt;
let derrotas;
let derrotasInt;

do {
  vitorias = prompt("Por favor, insira o total de vitórias:");
  vitoriasInt = parseInt(vitorias, 10);
} while (isNaN(vitoriasInt));

do {
    derrotas = prompt("Por favor, insira o total de vitórias:");
    derrotasInt = parseInt(derrotas, 10);
} while (isNaN(derrotasInt));
  
function Rank(vitoria, derrota){
    let saldoVitorias = vitoria - derrota;
    let nivel;

    if(saldoVitorias <= 10){
        nivel = "Ferro"
    }
    else if(saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze"
    }
    else if(saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = "Prata"
    }
    else if(saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = "Ouro"
    }
    else if(saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = "Diamante"
    }
    else if(saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendário"
    }
    else{
        nivel = "Imortal"
    }

    console.log("O Herói tem um saldo de " + saldoVitorias+ "Vitórias. Está no nível: " + nivel);
}

Rank(vitoriasInt, derrotasInt);