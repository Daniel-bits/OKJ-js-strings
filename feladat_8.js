const anotherInpt = document.querySelector("input");
const btn2 = document.getElementById("atalakit");


btn2.addEventListener('click', enCipher);

function enCipher() { //ezt általánosabban írtam meg de nem lehet paramétereket átadni az Listenerben!

	const thatStr = String(anotherInpt.value).trim();
	let bufferArr = [];

	for (let i = 0; i < thatStr.length; i++) {
		bufferArr[i] = thatStr.codePointAt(i);

	}
	output.textContent = bufferArr;
}