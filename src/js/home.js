window.onload = function(){

	document.getElementById("calc").addEventListener('click', function(){

		let n1 = parseFloat(document.getElementById("n1").value);
		let n2 = parseFloat(document.getElementById("n2").value);

		if(n1 >= 0 && n2 >= 0){
			let res = n1 + n2;
			document.getElementById("resul").innerHTML = res;
		}

		

		
	});

};