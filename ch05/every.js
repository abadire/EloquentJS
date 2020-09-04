function everySome(arr, pred) {
	return !arr.some(el => !pred(el));
}

function everyLoop(arr, pred) {
	for (let el of arr)
	{
		if (!pred(el)) return false;
	}
	return true;
}

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));