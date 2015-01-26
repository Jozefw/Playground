

myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

myDataRef.on('value', function(snapshot) {
	console.log(snapshot);
	var data = snapshot.val();

	console.log( data );
	
	console.log( Object.keys(data) );
	data.sort( function(a,b) { return b.gameTime - a.gameTime; } );
   	console.log( 'after sort');
   	console.log( data );
});