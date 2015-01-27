

myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

myDataRef.on('value', function(snapshot) {

	var data = snapshot.val();

	console.log( data );
	
	// console.log( Object.keys(data) );
	// data.sort( function(a,b) { return b.gameTime - a.gameTime; } );
  var gamePicked = Object.keys(data);

  var s;
  var	d;
	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + d + '">' + d + '</option>'; 
		$("select").append(s);
	}
	var m = $("#gameSelect option:selected").text();
	console.log(m);
// grab the selected game number and display game (use jquery)

});

