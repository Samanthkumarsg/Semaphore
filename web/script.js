console.log(firebase);

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Initialize Firebase
var config = {
	apiKey: '',
	authDomain: 'semaphore-55349.firebaseapp.com',
	databaseURL: 'https://semaphore-55349.firebaseio.com',
	projectId: 'semaphore-55349',
	storageBucket: 'semaphore-55349.appspot.com',
	messagingSenderId: '1038943415868'
};
firebase.initializeApp(config);

function login() {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
			localStorage.setItem('value', result);
			console.log(result);
		})
		.catch(function(err) {
			console.log(err);
		});
}

function logout() {
	firebase
		.auth()
		.signOut()
		.then(
			function() {
				console.log('Signed Out');
			},
			function(error) {
				console.error('Sign Out Error', error);
			}
		);
}

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		console.log('Logged in');
	} else {
		console.log('Not logged in');
	}
});
