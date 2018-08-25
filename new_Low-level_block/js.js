;
more.onclick = function(){
	const start = Date.now();

	let timer = setInterval(function(){
		let timePassed = Date.now() - start;

		t.style.left = timePassed + 'px';
		setTimeout(() => {s.style.left = timePassed + 'px'}, 400);
		setTimeout(() => {f.style.left = timePassed + 'px'}, 700); 
		setTimeout(() =>{
			setInterval(() =>{
				more.style.height = timePassed + 'px';
				timePassed > 500 ? clearInterval(timer) : null;
			}, 25);

			more.style.deisplay = 'none';

		}, 1200);

		timePassed > 500 ? clearInterval(timer) : null;

	}, 25);

	setTimeout(() =>{
			container.style.height = '400px';
			container.style.grid = 'calc(var(--container-height) / 3.5) 0px 1fr 30px/ 1fr';
			min.style.display = 'grid';

		}, 1500);
};

min.onclick = function(){
	const start = Date.now()
	setTimeout(() =>{
		let timer = setInterval(() =>{
		let timePassed = Date.now() - start;
			more.style.height = timePassed + 'px';	
			timePassed >= 30 ? clearInterval(timer): null;
			}, 1);
		}, 1000);
		


	container.style.height = '145px';

	setTimeout(() =>{
		// more.style.height = '30px';

		f.style.left = '0px';
		s.style.left = '0px';
		t.style.left = '0px';

		min.style.display = 'none';
		more.style.display = 'grid';
		
		container.style.grid = 'calc(var(--container-height) / 3.5) 1fr 0px 0px/ 1fr';
		
	
	}, 800); 
}







;