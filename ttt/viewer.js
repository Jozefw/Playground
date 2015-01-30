myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
		chooseGame,
		boardDisplayed,
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
// grab the selected game number and display game (use jquery.. data object will have the board)

var m = $("#gameSelect").change(function() {
	var str = "";
	$("select option:selected").each(function() {
		str = str + $(this).val();
	})
console.log(str);
	// compare the choice with the data object to get the board and display to screen	
	// for ( var j = 0; j< data.length; j++ ) {
		// for ( key in data ) {
		// 	if ( str === new Date(key*1).toLocaleString() ) {
		// 		boardDisplayed = data[key].board[0];
				
		// 	}
		// }
	// } 	
console.log( 'board ' + data[str].board );  // all the moves in the selected game
	chooseGame = $("#choice").text( data[str].board );

console.log( data[str].board[0] ); // the first move
console.log( data[str].board[1] ); // the 2nd move
console.log( data[str].board[2] ); // the 2nd move

	
 });
