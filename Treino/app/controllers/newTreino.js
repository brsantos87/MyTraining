var args = arguments[0] || {};

function close() {
	if (OS_IOS) {
		$.navWin.close();
	} else {
		$.newTreino.close();	
	}
}

function save() {
	var treino = Alloy.createModel('treino', {
		descricao:$.treinoTextField.value,
		categoria:$.categoriaTextField.value,
	});
	treino.save();
	Alloy.Collections.Treinos.fetch();
	close();
}