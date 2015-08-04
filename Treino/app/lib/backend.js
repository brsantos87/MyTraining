var xhr = Ti.Network.createHTTPClient();

exports.getTreinos = function(callback) {
	xhr.open('GET', 'http://insitesistemas.com.br/treinoServer/treino.json');
	xhr.onload = function () {
		var data = JSON.parse(this.responseText).treinos;
		callback(data);
	};
	xhr.onerror = function(e) {
		alert(e);
	};
	xhr.send();
};
 