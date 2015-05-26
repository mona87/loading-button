$(document).ready(start);

function start(){


	$btn = $('#btn');
	txtVal = $btn.val();

	$btn.on('click', load);

	function load(e){

		
		$btn.html('loading...') 
		$btn.css('color','#cccccc');

		setTimeout(changeBack, 4000);
	}

	

	function changeBack(){

		$btn.html('Submit') 
		$btn.css('color','#000000');
		btn.html = txtVal;
	}









}