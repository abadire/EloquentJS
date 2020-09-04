function reverseArray(arr) {
	let res = [];
	for (let el of arr)
	{
		res.unshift(el);
	}
	return res;
}

function reverseArrayInPlace(arr) {
	let temp = arr.slice();
	for (let i = 0; i != arr.length; ++i)
	{
		arr[i] = temp.pop();
	}
}