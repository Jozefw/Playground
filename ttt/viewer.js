myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
		chooseGame,
		boardDisplayed,
		gamePicked;

myDataRef.on('value', function(snapshot) {
	data = snapshot.val();

	console.log( data );
	for ( i in data ) {
		console.log(i, data[i].board[0]);
	}
	
  gamePicked = Object.keys(data);
  console.log( "this is gamePicked " + gamePicked);
  var s;
  var	d;
  var $select = $("select");
	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + d + '">' + d + '</option>'; 
		$select.append(s);
	}
});
// grab the selected game number and display game (use jquery.. data object will have the board)

var m = $("#gameSelect").change(function() {
	var str = "";
	$("select option:selected").each(function() {
		str = str + $(this).text();
	})
	// display the chosen game to screen
	chooseGame = $("#choice").text(str);
	for ( var j = 0; j < data.length; j++ ) {
		for ( key in data ) {
			if ( data.hasOwnProperty( chooseGame )){
				console.log(data[i].board[j]);
				$("#boardChoice").append(data[i].board[j]);
			}
			
		}
	}

// compare the choice with the data object to get the board and display to screen	
	

	

});
	