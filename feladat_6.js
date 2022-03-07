const but = document.querySelector("[type='button']");

but.onclick = function searchText() {

let text = document.getElementById('szoveg').value;
let word = document.getElementById('szoveg2').value;

if (!validate(word,text)) return;

	if (text.indexOf(word) !== -1)
		alert("Szerepel az adott szó a keresett szövegben! ");
	else
		alert('Nem szerepel a szövegben a megadott szó! ');
}



function validate(text,word) {
	if (/\s/.test(word) || ' '.indexOf() == undefined )
		alert('Egy szót kell megadnia!');

	if (text.length <= 30) {
		alert('Harminc karakternél hosszabbat kell megadnia!');
		return false;
	}
return true;
}