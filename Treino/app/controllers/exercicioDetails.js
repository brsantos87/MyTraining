var exercicio = arguments[0] || {};

$.idExDescricao.text = exercicio.get('descricao');
$.idLabelSeries.text = exercicio.get('qtdSerie');
$.idLabelRepet.text = exercicio.get('qtdRepeticao');
$.idLabelPeso.text = exercicio.get('peso');

function remove() {
	exercicio.destroy();
	close();
}

function close() {
	Alloy.Collections.Exercicios.fetch();
	$.exercicioDetails.close();		
}

function takePhoto() {
	Ti.Media.showCamera({
		success:function(e) {
			var image = e.media;
			$.photoImageView.image = image;
			
			var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,
				exercicio.get('alloy_id') + ".jpg");
			file.write(image);
			
			exercicio.set('photo', file.nativePath);
			exercicio.save();
			
			Alloy.Collections.Exercicios.fetch();
		},
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
	});
}
