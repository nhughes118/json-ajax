console.log('welcome');

var parsed = JSON.parse('{"jelly": "fish"}')
console.log(parsed.jelly);

/*
$.ajax({
  type: 'GET',
  url: 'https://nycda.com'
}).done(function(data){
  console.log(data)
})
*/

/* 
	on click of #add-painting
	get .value of #image_url
	get .value of #name
	
	invoke addPainting('xxx', image_url, name)
*/
$(document).ready(function(){

	$('#add-painting').on('click', function(){
		var getImg = $('#image_url').val()
		var getId = $('#userId').val()
		var getName = $('#name').val()
		console.log(getImg, getId, getName)
		addPainting(getId, getImg, getName)
	});
	
	$('#list-painting').on('click', function(){
		var getId = $('#userId').val()
		listPaintings(getId)
	});


}); // closes doc.ready