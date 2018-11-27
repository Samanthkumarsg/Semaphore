console.log(firebase);

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function login() {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
			console.log(result);
		})
		.catch(function(err) {
			console.log(err);
		});
}
