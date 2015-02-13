var myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

var $tableTemplate = $("#tableTemplate"),
		$select = $("select"),
		str,
		s,
		d;


$tableTemplate.hide();

function displayPrevGame() {
	$tableTemplate.show().appendTo("#row prerecorded");

};

function showGameSelected () {
	$("#gameSelect").change(function() {
		str = "";
		$("select option:selected").each(function() {
			str = str + $(this).val();
		});
		$(this).off();
	 	// show what game was chosen
		$(".prerecorded").append( new Date(Number( str )).toLocaleString() ); 
	});
}
	
myDataRef.on('value', function(snapshot) {
	console.log("value fired off" + snapshot.val());
	
	data = snapshot.val();
	gamePicked = Object.keys(data);
	
	for ( var i = 0; i < gamePicked.length; i++ ) {
		d = new Date(gamePicked[i]*1).toLocaleString();
		s = '<option value="' + ( gamePicked[i] * 1 ) + '">' + d + '</option>';
		$select.append(s);
		
	}
	showGameSelected();
 // if you select from select box run a certain function
 	// or if you select live game button it runs another function or says no games
});


