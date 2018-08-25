;

let container = document.getElementById('container');
// let more = document.getElementById('more');


more.onclick = function(){

	var start = Date.now();

	var timer = setInterval(function(){
		
		var timePassed = Date.now() - start;

		t.style.left = timePassed + 'px';
		setTimeout(function(){
			s.style.left = timePassed + 'px';
			// clearInterval();
		}, 400);
		setTimeout(function(){
			f.style.left = timePassed  + 'px';
			// clearInterval();
		}, 700);

		setTimeout(function(){
			start_display = Date.now();
			setInterval(() =>{

				var time_r = start_display - Date.now();
				more.style.height = time_r;

				if (time_r < 500) clearInterval(timer);
			}, 25);
			more.style.block = 'none';
			clearInterval();
		}, 1200);

		setTimeout(function(){
			container.style.height = '400px';
			container.style.grid = 'calc(var(--container-height) / 3.5) 0px 1fr 30px/ 1fr';

			min.style.display = 'grid';

		}, 1500)


		if (timePassed > 1000) clearInterval(timer);


	}, 25);
	// clearInterval(timer);

};

min.onclick = function(){
	container.style.height = '155px';
	setTimeout(() =>{
		f.style.left = '0px'
		s.style.left = '0px'
		t.style.left = '0px'
		min.style.display = 'none';
		more.style.block = 'grid';
		container.style.grid = 'calc(var(--container-height) / 3.5) 1fr 0px/ 1fr';
		more.style.height = '30px';
	}, 1000);
}








