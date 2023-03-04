function acordionList(){
	const sectionFaq = document.querySelectorAll("[data-acordion-list]");
	const todasPerguntasFaq = sectionFaq[0].querySelectorAll("dt");

	function mostrarResposta(){
		console.log(this.nextElementSibling);
		this.classList.toggle("ativo");
		this.nextElementSibling.classList.toggle("motrarRespostaFaq");
	}
	todasPerguntasFaq[0].nextElementSibling.classList.add("motrarRespostaFaq");
	todasPerguntasFaq[0].classList.add("ativo");
	//Adicionar eventListener em todas as perguntas.
	todasPerguntasFaq.forEach(dt=>dt.addEventListener("click", mostrarResposta));

}
acordionList();

export default acordionList;