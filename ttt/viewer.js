myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
		chooseGame,
		boardDisplayed,
		date,
		gamePicked;

myDataRef.on('value', function(snapshot) {
	data = snapshot.val();

	console.log( data );
	
  gamePicked = Object.keys(data);
  console.log( "this are gamePicked " + gamePicked);
  var s;
  var	d;
  var $select = $("select");
	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + ( gamePicked[i] * 1 ) + '">' + d + '</option>'; 
		$select.append(s);
	}
});
// grab the selected game number and display game

var m = $("#gameSelect").change(function() {
	var str = "";
	$("select option:selected").each(function() {
		// date = date + $(this).html();
		str = str + $(this).val();

	})
	for ( var i = 0; i <= 8; i++ ) {
		for ( var j = 0; j <= 8; j++ ) {		
			if ( data[str].board[i][j] === "X" || data[str].board[i][j] === "O" ) {
			
			var t = $( "#"+[j]).text(data[str].board[i][j] );
			}
		}
	}
		chooseGame = $("#choice").append( str );
 });
