const text = prompt('Írjon be egy szöveget!','');
let reversed = "";
for (const letter of text) {
	reversed = letter + reversed;
}
const tuptuo = document.getElementById('output');
output.style.color = "white";
tuptuo.innerText = reversed;