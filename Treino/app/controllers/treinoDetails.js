var treino = arguments[0] || {};

$.treinoDetails.title = treino.get('descricao');
var idTreino = treino.get('id');

Alloy.Collections.Exercicios.fetch();

function addExercicio(){
	var ctrl = Alloy.createController('newExercicio',idTreino);
	var view = ctrl.getView();
	view.open();
		
}

function exerciciosFilter(collection) {
	return collection.where({codigoTreino:idTreino});
}

function showDetails(e){
	var exercicio = Alloy.Collections.Exercicios.at(e.index);
	//var treino = Alloy.Collections.Treinos.get(e.rowData.rowid);
	var ctrl = Alloy.createController('exercicioDetails', exercicio);
	
	var view = ctrl.getView();
	view.open();	
}

function deleteTreino(){
	deleteExercicios();
	treino.destroy();
	close();
}

function deleteExercicios(){
	var collection = Alloy.Collections.Exercicios.where({codigoTreino:idTreino});
	for(i = 0; i < collection.lenght; i++){
		collection[i].destroy();
	}
	Alloy.Collections.Exercicios.fetch();
}


function close() {
	Alloy.Collections.Treinos.fetch();
	$.treinoDetailsWindow.close();		
}