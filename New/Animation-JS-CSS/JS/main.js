$(document).ready(function(){
	$('#button').click(function () {
		$("#wr1").removeClass("wrapper1"); 
		$('#wr1').toggleClass('newWrapper1');
		$("#cont").removeClass("content");
		$('#cont').toggleClass('newContent');
		$("#wr2").removeClass("wrapper2");
		$('#wr2').toggleClass('newWrapper2');
		$('#button').removeClass();
		$('#button').toggleClass('newH2-content');
		$('#h2-hover').removeClass();
		$('#h2-hover').toggleClass('newH2-content');
	});
});