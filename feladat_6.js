const but = document.querySelector("[type='button']");

but.onclick = function searchText() {

const text = document.getElementById('szoveg').value;
const word = document.getElementById('szoveg2').value;
word = String(word);
text = String(text);
if (!validate(word,text)) return;

	if (text.indexOf(word) !== -1)
		alert("Szerepel az adott szó a keresett szövegben! ");
	else
		alert('Nem szerepel a megadott szövegben a megadott szó! ');
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