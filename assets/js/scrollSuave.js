//variável que captura todos os links Ancora da página
const allLinks = document.querySelectorAll("header a[href^='#']");
function scrollSuave(){

	console.log(allLinks);
	
	//Essa função vai fazer um Scroll suave para o elemento destino.
	function irParaSecao(e){
	//parametro "e" vem do eventlistener adicionado a variável allLinks que contém todos os links internos.
	e.preventDefault();
	console.log(e.currentTarget);
	//Armazena a String do ID do elemento destino do âncora.
	const href = e.currentTarget.getAttribute("href");
	//Guardo o elemento que o ancora está direcionando.
	elementoClicado = document.querySelector(href);
	//Distância do elemento clicado até o topo.
	const distDoTopo = elementoClicado.offsetTop;
	//Método do window
	window.scrollTo({
		top: distDoTopo,
		behavior: "smooth",
	});
}

//Adiciona em todos os elementos âncora locais da página um evento de click que ativa a função [ irParaSecao ]
allLinks.forEach(link => link.addEventListener("click", irParaSecao))
}

//Para uma função usa-se default.
//Para mais funções retira-se o default e coloca entre {} definindo um objeto, após isso só separar com vírgula.
export default scrollSuave;