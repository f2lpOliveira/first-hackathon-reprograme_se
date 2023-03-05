//Todos os console.log são fundamentais para o entendimento do código.

//variável que captura todos os links Ancora da página
const allLinks = document.querySelectorAll("header a[href^='#']");
function scrollSuave(){

	//Para ver se pegou todos os links do local desejado. No meu caso o HEADER.
	console.log(allLinks);
	
	//Essa função vai fazer um Scroll suave para o elemento destino.
	function irParaSecao(e){
	//parametro "e" vem do eventlistener adicionado a variável allLinks que contém todos os links internos.
	e.preventDefault();

	//Verificar se mostra o elemento que eu estou clicando.
	console.log(e.currentTarget);

	//Armazena a String do ID do elemento destino do âncora.
	const href = e.currentTarget.getAttribute("href");
	console.log(href);
	//Guardo o elemento que o ancora está direcionando.
	const elementoClicado = document.querySelector(href);

	elementoClicado.scrollIntoView({
		behavior: "smooth",
		block: "start",
	});


	}




	// 	//Distância do elemento clicado até o topo.
// 	const distDoTopo = elementoClicado.offsetTop;
// 	console.log(distDoTopo);

// 	//Método do window
// 	window.scrollTo({
// 		top: distDoTopo,
// 		behavior: "smooth",
// 	});
// }

//Adiciona em todos os elementos âncora da minha variável um evento de click que ativa a função [ irParaSecao ]
allLinks.forEach(link => link.addEventListener("click", irParaSecao))
}

//Para uma função usa-se default.
//Para mais funções retira-se o default e coloca entre {} definindo um objeto, após isso só separar com vírgula internamente ex: export {funcao1, funcao2}.
export default scrollSuave;