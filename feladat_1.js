/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.*/

function truncate(str,maxlength) {
let truncated = "";

if (str.length > maxlength) {
	truncated += str.slice(0,maxlength-1);
	truncated += "...";
	return truncated;
}
return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 12));

console.log(truncate("Okay!", 8));