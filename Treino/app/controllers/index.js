//var backend = require('backend');


/*backend.getTreinos(function(treinos){
	Alloy.Collections.Treinos.reset(treinos); 
});
*/

function addTreino(){
	var crtl = Alloy.createController('newTreino');
	var win = crtl.getView();
	win.open();
}



Alloy.Collections.Treinos.fetch();

$.index.open();
