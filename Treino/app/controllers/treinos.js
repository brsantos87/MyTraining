var args = arguments[0] || {};

function showDetails(e){
	var treino = Alloy.Collections.Treinos.at(e.index);
	//var treino = Alloy.Collections.Treinos.get(e.rowData.rowid);
	var ctrl = Alloy.createController('treinoDetails', treino);
	
	$.treinosTab.open(ctrl.getView());	
}

function addTreino(){
	var ctrl = Alloy.createController('newTreino');
	if (OS_IOS) {
		// No IOS é preciso de um navigationWindow para mostrar o title bar no modal
		var navWin = Ti.UI.iOS.createNavigationWindow({
			modal: true,
			window: ctrl.getView()
		});
		// Passando a referência do NavigationWindow para poder dar um close
		ctrl.navWin = navWin;
		navWin.open();
	} else {
		crtl.getView().open();
	}
		
}

