function onClick(element) { //modal
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }

  var vetorm = new Array();

class BancoM
{
	salvarp(objetom)	
	{
		if(localStorage.getItem("music") == undefined) //se o lacalStorage não possuir o "music" ele vai cria-lo e salvar os dados fornecidos;
		{
			vetorm.push(objetom);
			localStorage.setItem("music", JSON.stringify(vetorm));
		}
		else //se o lacalStorage possuir o "music" ele vai apenas salvar os dados fornecidos;
		{
			var mu = JSON.parse(localStorage.getItem("music"));
			mu.push(objetom);
			localStorage.setItem("music", JSON.stringify(mu));
		}	
	}
}
class Play
{
	constructor()
	{
        this.nome;
        this.artista;
		this.genero;
    }
	entrada(no, cb, gem)
	{
		this.Nome= no;
        this.Artista= cb;
		this.Genero= gem;
    }
}
function salvarp()
{
	var elemento = new Play();
	elemento.entrada(no.value, art.value, gem.value);
	var banquinho = new BancoM();
	banquinho.salvarp(elemento);
	alert("Pedido de música enviado com sucesso!");
	limparp();
}
function limparp()
{
	no.value = '';
	art.value = '';
	gem.value = '';
}


var vetorc = new Array();

class BancoC
{
	salvarc(objetoc)	
	{
		if(localStorage.getItem("comem") == undefined) //se o lacalStorage não possuir o "comem" ele vai cria-lo e salvar os dados fornecidos;
		{
			vetorc.push(objetoc);
			localStorage.setItem("comem", JSON.stringify(vetorc));
		}
		else //se o lacalStorage possuir o "comem" ele só vai salvar os novos dados fornecidos;
		{	
			var com = JSON.parse(localStorage.getItem("comem"));
			com.push(objetoc);
			localStorage.setItem("comem", JSON.stringify(com));
		}	
	}
}

class Comentarios
{

	constructor()
	{
    this.nome;
    this.email;
		this.comentario;
    }
	entradac(nome, email, com)
	{
		this.Nome= nome;
        this.Email= email;
		this.Comentário= com;
    }
}
function salvarc()
{
	var elemento = new Comentarios();
	elemento.entradac(nome.value, email.value, com.value);
	var banquinho = new BancoC();
	banquinho.salvarc(elemento);
	alert("Comentário enviado com sucesso!");
	limparc();
}
function limparc()
{
	nome.value = '';
	email.value = '';
	com.value = '';
}
function ir_coment(){
	document.getElementById('comen').className = "vis"; 	
	document.getElementById('inicio').className = "inv"; 
	mostrarc();
}
function ir_inicio_com(){
	document.getElementById('comen').className = "inv"; 	
	document.getElementById('inicio').className = "vis"; 
}
function ir_jogo(){
	document.getElementById('memo').className = "vis"; 	
	document.getElementById('inicio'||'comem'||'mus').className = "inv"; 
}
function ir_inicio_jogo(){
	document.getElementById('memo').className = "inv"; 	
	document.getElementById('inicio'||'comem'||'mus').className = "vis"; 
}
function ir_mus(){
	document.getElementById('mus').className = "vis"; 	
	document.getElementById('inicio').className = "inv"; 
	mostrarm();
}
function ir_inicio_mus(){
	document.getElementById('mus').className = "inv"; 	
	document.getElementById('inicio').className = "vis"; 
}


function mostrarc()
{
	vetorc = JSON.parse (localStorage.getItem("comem"));
	var texto = document.getElementById("listarc");
	texto.innerHTML = "";
	var i;
	for(i=0;i<vetorc.length;i++)
	{
		texto.innerHTML += "<p>"+ vetorc[i].Nome+ "</p>";
		texto.innerHTML += "<p>"+ vetorc[i].Comentário+ "</p>";
		texto.innerHTML += "<hr>";
	}	
}

function mostrarm()
{
	vetorm = JSON.parse (localStorage.getItem("music"));
	var texto = document.getElementById("listarm");
	texto.innerHTML = "";
	var i;
	for(i=0;i<vetorm.length;i++)
	{
		texto.innerHTML += "<p>"+ vetorm[i].Nome+ "</p>";
		texto.innerHTML += "<p>"+ vetorm[i].Artista+ "</p>";
		texto.innerHTML += "<p>"+ vetorm[i].Genero+ "</p>";
		texto.innerHTML += "<hr>";
	}	
}