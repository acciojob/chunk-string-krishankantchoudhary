function stringChop(str, size) {
  // your code here
	let newarr=[];
	for(let i=0; i<str.length; i++){
		newarr.push(str.subString(i,i+size));
	}
	return newarr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
