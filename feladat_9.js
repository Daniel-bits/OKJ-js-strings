const btn3 = document.getElementById("kiir");

let strArr = [];
for (let i = 0; i < 256; i++) {
	strArr[i] = String.fromCodePoint(i);
}
btn3.onclick = () => {document.getElementById("output2").textContent = strArr;}

console.table(strArr);
