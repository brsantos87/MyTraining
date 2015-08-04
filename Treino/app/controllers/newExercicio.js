var idTreino = arguments[0] || {};


function close() {
	if (OS_IOS) {
		$.navWin.close();
	} else {
		$.newExercicio.close();	
	}
}

function save() {
	var exercicio = Alloy.createModel('exercicio', {
		descricao:$.exercicioDescTextField.value,
		qtdSerie:$.exercicioSerieTextField.value,
		qtdRepeticao:$.exercicioReptTextField.value,
		peso:$.exercicioPesoTextField.value,
		codigoTreino:idTreino,
	});
	exercicio.save();
	Alloy.Collections.Exercicios.fetch();
	close();
}