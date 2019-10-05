var jogadorAtual = "x";
var celula = new Array;
var jogadas = 0;

function retornarOOutroJogador() {
    if (jogadorAtual == "x") {
		return "o";
	}		
	return "x";	
}

function retornarProximaCelulaVazia() {
	for (i=0; i<10 ; i++) {
		if (celula[i] == undefined) {
			 return i;
		}
	}		 

    return null;
}
	
function maquinaEscolherPosicao() {
	if (jogadas == 1 && celula[5] == undefined) {
        celula[5] = retornarOOutroJogador();
    } 
    
    var cel = retornarProximaCelulaVazia();
    if (jogadas == 1 && cel != null) {
	    celula[cell] = jogadorAtual;	
	}
	
	var outroJogador = retornarOOutroJogador();
	if (jogadas == 3 && celula[0] == outroJogador && celula[1] == outroJogador) {
        celula[2] = jogadorAtual;
    }     
}

function desenharTabuleiro() {
    var tabuleiro = document.getElementById("tabuleiro");
	
	$("#tabuleiro").append("<button id='botao0' onClick='selecionar(0)'>-</button>");
	$("#tabuleiro").append("<button id='botao1' onClick='selecionar(1)'>-</button>");
	$("#tabuleiro").append("<button id='botao2' onClick='selecionar(2)'>-</button>");
	$("#tabuleiro").append("<br />");
		
	$("#tabuleiro").append("<button id='botao3' onClick='selecionar(3)'>-</button>");
	$("#tabuleiro").append("<button id='botao4' onClick='selecionar(4)'>-</button>");
	$("#tabuleiro").append("<button id='botao5' onClick='selecionar(5)'>-</button>");
	$("#tabuleiro").append("<br />");

	$("#tabuleiro").append("<button id='botao6' onClick='selecionar(6)'>-</button>");
	$("#tabuleiro").append("<button id='botao7' onClick='selecionar(7)'>-</button>");
	$("#tabuleiro").append("<button id='botao8' onClick='selecionar(8)'>-</button>");
}

function selecionar(posicao) {
	if (celula[posicao] != undefined) {
	    alert("Esta posição já está selcionada");	
	    return;
	}
	
	jogadas++;
	
    $("#botao" + posicao).text(jogadorAtual);
   
    celula[posicao] = jogadorAtual;
    
    var vencedor = verfificarVencedor();
    
    if (vencedor !== false) {
		apresentarVencedor(jogadorAtual);
		return;
	}	 
    
    alternarJogador();	   
}

function selecionarJogador(jogador) {
	jogadorAtual = jogador;
}	

function alternarJogador() {
    if (jogadorAtual == "x") {
		jogadorAtual = "o";
	} else {
	    jogadorAtual = "x";
	}
}	

function verfificarVencedor() {
    if (celula[0] == celula[1] && celula[1] == celula[2] && celula[0] !== undefined) {
        return celula[0];
    }
        
    if (celula[3] == celula[4] && celula[4] == celula[5] && celula[3] !== undefined) {
        return celula[3];
    }
        
    if (celula[6] == celula[7] && celula[4] == celula[6] && celula[8] !== undefined) {
        return celula[6];
    }
    
    if (celula[0] == celula[4] && celula[0] == celula[8] && celula[0] !== undefined) {
        return celula[0];
    }
    
    if (celula[2] == celula[4] && celula[2] == celula[6] && celula[2] !== undefined) {
        return celula[2];
    }
        
    if (celula[0] == celula[3] && celula[6] == celula[0] && celula[3] !== undefined) {
        return celula[0];
    }    

    if (celula[1] == celula[4] && celula[6] == celula[1] && celula[1] !== undefined) {
        return celula[1];
    }

    if (celula[2] == celula[5] && celula[2] == celula[8] && celula[8] !== undefined) {
        return celula[2];
    }
    
    return false;
}

function apresentarVencedor(vencedor) {
	$("#tabuleiro").append("<hr />");
	$("#tabuleiro").append("O " + vencedor + " ganhou! Parabéns!");
	$("#tabuleiro").append("<hr />");
}	
