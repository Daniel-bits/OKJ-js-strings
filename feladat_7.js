const inpt = document.querySelector("input");
const btn = document.getElementById("vizsgal");
const output = document.querySelector("p span");

btn.addEventListener('click', countChars);

function countChars() { //ezt általánosabban írtam meg de nem lehet paramétereket átadni az Listenerben!

	const thatStr = inpt.value.trim();
	let wordCountArr = thatStr.split(' ');
	let spaceCount = wordCountArr.length - 1;

	output.innerText = spaceCount;
}

