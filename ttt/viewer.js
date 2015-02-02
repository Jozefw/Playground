myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
	chooseGame,
	boardDisplayed,
	date,
	gamePicked,
	s,
	d,
	str,
	temp,
	$m,
	$t,
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
$m = $("#gameSelect").change(function() {
	str = "";
	$("select option:selected").each(function() {
	str = str + $(this).val();
})
console.log(data);

temp = 0;
	for ( var j = 0; j < data[str].board.length; j++) {
		if ( data[str].board[temp][j] === "X" || 
			   data[str].board[temp][j] === "O" ) {
			if ( temp < 9 ) { 
				temp = temp + 1;
			}
		$t = $( "#"+j ).text(data[str].board[temp][j] );
		}
		
		$("#nextMove").click(function() {
		console.log("got next move");

	});
}


// for ( var i = 0; i < data[str].board.length; i++ ) {
// 	for ( var j = 0; j < 9; j++ ) {		
// 		if ( data[str].board[i][j] === "X" || data[str].board[i][j] === "O" ) {
// 			$t = $( "#"+j ).text(data[str].board[i][j] );
			
// 		}
// 	}
// }

chooseGame = $("#choice").append( new Date(Number( str )).toLocaleString() );
});
