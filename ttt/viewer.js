

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
	
});
// grab the selected game number and display game (use jquery.. data object will have the board)
// var m = $("#gameSelect option:selected").text();
var m = $("#gameSelect").change(function() {
	var str = "";
	$("select option:selected").each(function() {
		str = str + $(this).text() + " ";
	})
	$("#choice").text(str);
	console.log(m);
});
	