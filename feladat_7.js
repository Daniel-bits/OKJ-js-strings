//hatékonyan, általánosítva(generalizáltan), bolondbiztosan
const inpt = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector("p");

btn.addEventListener('click', countChars);

function countChars() { //ezt általánosabban írtam meg de nem lehet paramétereket átadni!

	const thatStr = inpt.value.trim();
	let wordCountArray = thatStr.split(' ');
	let spaceCount = charArray.length - 1;

	output.innerText = spaceCount;
}

