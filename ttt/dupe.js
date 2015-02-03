var myDataRef = new Firebase('https://t-cubed.firebaseio.com/');

var data,
	chooseGame,
	boardDisplayed,
	date,
	gamePicked,
	s,
	d,
	str,
	snapShotIndex,
	$select = $("#select"),
	$nextMove = $("#nextMove");

function getWhichGametoShow() {
	$("#gameSelect").change(function(){
		str = '';
		$("select option:selected").each(function(){
		  str = str + $(this).val();
		})	
		$(this).off;
		$("#choice").append(new Date(Number( str )).toLocaleString() );
		snapShotIndex = 1;
		buttonHandler();
	});
}	