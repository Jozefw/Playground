var myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

var	data,
	chooseGame,
	boardDisplayed,
	date,
	gamePicked,
	s,
	d,
	str,
	snapshotIndex,
	showLiveGame,
	dataLive,
	$select = $("select"),
	$nextMove = $('#nextMove');

function getWhichGametoShow () {
	// Set up handler to grab the selected game to show 
	$("#gameSelect").change(function() {
		str = "";
		$("select option:selected").each(function() {
			str = str + $(this).val();
		});
		
		$(this).off();  // handler for select box is not needed anymore.	

		$("#choice").append( new Date(Number( str )).toLocaleString() );  // show what game was chosen

		// Now we have which game to display as a key into 'data',
		// let's show the first move immediately,
		showMove(0);

		// and then setup handler for user to click button for next moves
		snapshotIndex = 1;
		buttonHandler();
	});
}

myDataRef.on('child_added', function(snapshot){
  dataLive = snapshot.val();
  console.log(dataLive);
  $("#" + 20).text("p");

});

var showMove = function( index ) {
	for ( var i = 0; i < 9; i++ ) {
		// dont need to even check to see if its empty, 'x' or 'o', just do it.
		console.log( data[str].board[ index ] );
		$( "#" + i ).text( data[str].board[ index ][i] );
	}
};

var buttonHandler = function() {
	$nextMove.on( 'click', advanceMove );
};


var advanceMove = function() {
	if ( snapshotIndex < data[str].board.length ) {
		showMove( snapshotIndex );
		snapshotIndex += 1;
	}
	else {
		// end of show
		$nextMove.off();	// turn of handler for advance Move button
		$nextMove.text('done');
	}
};


/*
 * main flow of the program starts here
 */


// First things first, set up handler to recieve all data from firebase
myDataRef.on('value', function(snapshot) {
	data = snapshot.val();
	gamePicked = Object.keys(data);

	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + ( gamePicked[i] * 1 ) + '">' + d + '</option>';
		$select.append(s);
	}

	// Got the data, showed the choice of games, now setup handler to let them choose
	getWhichGametoShow();
});
