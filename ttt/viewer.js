myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
		chooseGame,
		boardDisplayed,
		date,
		gamePicked,
		s,
		d,
		m,
		t,
		str,
		$select = $("select");

myDataRef.on('value', function(snapshot) {
	data = snapshot.val();
  gamePicked = Object.keys(data);

	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + ( gamePicked[i] * 1 ) + '">' + d + '</option>';
		$select.append(s);
		}
});
// grab the selected game number and display game

	m = $("#gameSelect").change(function() {
	str = "";
	$("select option:selected").each(function() {
		// date = date + $(this).html();
		str = str + $(this).val();

	})
	for ( var i = 0; i < data[str].board.length; i++ ) {
		console.log(data[str].board.length);
		for ( var j = 0; j <= data[str].board.length; j++ ) {		
			if ( data[str].board[i][j] === "X" || data[str].board[i][j] === "O" ) {
			
			t = $( "#"+[j]).text(data[str].board[i][j] );
			}
		}
	}
		chooseGame = $("#choice").append( str );
 });
