/*
 Art Share API Library
*/


/*
	return all users
 	note: view the JSON response from this directly: https://art-share.herokuapp.com/api/v1/users/
 */
function returnUsers(){
	$.ajax({
		type: 'GET',
		url: 'https://art-share.herokuapp.com/api/v1/users/'
	}).done(function(response){
		console.log('all users: ', response);
	}).fail(function(error){
		console.log('Error: ', error);
	});
};


// Create a User
function createUser(fname, lname, password, email){
	$.ajax({
		type: 'POST',
		url: 'https://art-share.herokuapp.com/api/v1/users/',
		data: {
			user: {
				fname: fname,
				lname: lname,
				password: password,
				email: email
			}
		}
	}).done(function(response){
		console.log(response);
	}).fail(function(error){
		console.log('Error: ', error);
	});
};

// login with the user you just created
function loginUser(email, password){
	$.ajax({
		type: 'POST',
		url: 'https://art-share.herokuapp.com/api/v1/sessions/new',
		data: {
			email: email,
			password: password
		}
	}).done(function(response){
		console.log('successful login. Here\'s the user:', response.result);
	}).fail(function(error){
		console.log('Error: ', error);
	});
};
// Take note of your userID
// my id: 10509

// Create a painting for the user you just created, (pass in your users ID)
function addPainting(userId, image_url, name){
	$.ajax({
		type: 'POST',
		url: 'https://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/',
		data: {
			painting: {
				image_url: image_url,
				name: name
			}
		}
	}).done(function(response){
		console.log('Added a painting!: ', response.result);
	}).fail(function(error){
		console.log('Error: ', error);
	});
};

// List paintings for the user you just created (pass in YOUR user ID)
 function listPaintings(userId){
	$.ajax({
		type: 'GET',
		url: 'https://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/'
	}).done(function(response){
		console.log(response.result);
		// loop over the response
		for(var i = 0; i < response.result.length; i++){
			console.log(response.result[i].image_url);
			$('#art').append('<img src="' + response.result[i].image_url + '">');
		}
	}).fail(function(error){
		console.log('Error: ', error);
	});
};


/* --------------------------------------------------------------
MORE functions from the API
-------------------------------------------------------------- */

// Get currently Logged in user
// Doesn't work outside of art-share domain!?!?
function getCurrentUser(){
	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'https://art-share.herokuapp.com/api/v1/sessions/'
	}).done(function(response){
		console.log('success: ', response);
	});
};


/* Delete a users painting */
/*
function deletePainting(userId, paintingId){
	$.ajax({
		type: 'DELETE',
		url: 'http://art-share.herokuapp.com/api/v1/users/' + userId + '/paintings/' + paintingId
	}).done(function(response){
		console.log('Deleted a painting: ', response.result);
	});
};
*/

/* Delete a user */
/*
function deleteUser(userId){
	$.ajax({
		type: 'DELETE',
		url: 'http://art-share.herokuapp.com/api/v1/users/' + userId
	}).done(function(response){
		console.log('Deleted a user: ', response);
	});
};
*/
