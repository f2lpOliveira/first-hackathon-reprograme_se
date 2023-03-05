function validateForm(){
	// //Variável que contem o elemento formulário.
	const form = document.querySelector("[data-validate-form]");

	
	// Regex de validação [Obrigatoriamente um nome e um sobrenome].
	const regexNomeSobrenome = /^([a-z]+ [a-z]+)+$/i;
	const regexEmail = /\w+@[a-z]+\.[a-z]+\.[a-z]+|\w+@[a-z]+\.[a-z]+/;


	// validação campo input com nome e sobrenome.
	const campoNome = form.querySelector("#nomeCompleto");
	console.log(campoNome);
	campoNome.addEventListener("blur", (e)=>{
		//Quando sair do foco do campo Faça isso abaixo.
		const conteudoCampo = e.target.value;
		console.log(conteudoCampo);
		const campoTemNomeESobrenome /* ? */ = regexNomeSobrenome.test(conteudoCampo);
		console.log(campoTemNomeESobrenome);
		if(campoTemNomeESobrenome){
			console.log("Aqui eu adiciono a classe que vai estilizar com cor verde para informar ao usuário que o campo está preenchido corretamente.");
			campoNome.setCustomValidity("");
			campoNome.classList.remove("preenchimentoIncorreto");
			campoNome.classList.add("preenchimentoCorreto");
		}
		else{
			campoNome.setCustomValidity("Digite um sobrenome, numeros e caracteres especiais não são permitidos !");
			campoNome.classList.remove("preenchimentoCorreto");
			campoNome.classList.add("preenchimentoIncorreto");
		}
	})

	// validação campo input com email.
	const campoEmail = form.querySelector("#emailContato");
	console.log(campoEmail);
	campoEmail.addEventListener("blur", (e)=>{
		//Quando sair do foco do campo Faça isso abaixo.
		const conteudoCampo = e.target.value;
		console.log(conteudoCampo);
		const campoTemNomeESobrenome /* ? */ = regexEmail.test(conteudoCampo);
		console.log(campoTemNomeESobrenome);
		if(campoTemNomeESobrenome){
			console.log("Aqui eu adiciono a classe que vai estilizar com cor verde para informar ao usuário que o campo está preenchido corretamente.");
			campoEmail.setCustomValidity("");
			campoEmail.classList.remove("preenchimentoIncorreto");
			campoEmail.classList.add("preenchimentoCorreto");
		}
		else{
			campoEmail.setCustomValidity("Digite um sobrenome, numeros e caracteres especiais não são permitidos !");
			campoEmail.classList.remove("preenchimentoCorreto");
			campoEmail.classList.add("preenchimentoIncorreto");
		}
	})
	// Validação textArea
	const texArea = form.querySelector("#mensagemContato");
	console.log(texArea.value);
	texArea.addEventListener("input", (e)=>{
		console.log(e.target.value);
		if(e.target.value === ""){
			e.target.classList.remove("preenchimentoCorreto");
			e.target.classList.add("preenchimentoIncorreto");
		}
		else{
			e.target.classList.remove("preenchimentoIncorreto");
			e.target.classList.add("preenchimentoCorreto");
		}
	})
}

export default validateForm;