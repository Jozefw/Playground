myDataRef = new Firebase('https://t-cubed.firebaseio.com/');
var data,
		chooseGame,
		gamePicked;

myDataRef.on('value', function(snapshot) {
	
	data = snapshot.val();

	console.log( data );
	
	// console.log( Object.keys(data) );
	
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
// var m = $("#gameSelect option:selected").text();
var m = $("#gameSelect").change(function() {
	var str = "";
	$("select option:selected").each(function() {
		str = str + $(this).text() + " ";
	})
	chooseGame = $("#choice").text(str);
	
});
	