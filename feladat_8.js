const inpt2 = document.querySelector("input");
const btn2 = document.getElementById("atalakit");


btn2.addEventListener('click', encipher);

function encipher() { //ezt általánosabban írtam meg de nem lehet paramétereket átadni az Listenerben!

	const givenStr = String(inpt2.value).trim();
	let bufferStr = '';

	for (let i = 0; i < givenStr.length; i++) {
		bufferStr += givenStr[i].codePointAt();
		bufferStr += " ";
	}
	output.textContent = bufferStr;
}