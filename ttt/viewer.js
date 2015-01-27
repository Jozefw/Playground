

myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

myDataRef.on('value', function(snapshot) {

	var data = snapshot.val();

	// console.log( data );
	
	// console.log( Object.keys(data) );
	// data.sort( function(a,b) { return b.gameTime - a.gameTime; } );
  var gamePicked = Object.keys(data);

  var s;
	for ( var i = 0; i < gamePicked.length; i++ ) {
		s = '<option value="' + gamePicked[i] + '">' + gamePicked[i] + '</option>'; 
		$("select").append(s);

	}


});

