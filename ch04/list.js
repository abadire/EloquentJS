function arrayToList(arr) {
	let res = {};
	let current = res;
	let prev = null;
	for (let el of arr)
	{
		if (prev)
		{
			current = {};
			prev.rest = current
		}
		current.value = el;
		current.rest = null;
		prev = current;
	}
	return res;
}

function listToArray(list) {
	let current = list, res = [];
	while (current)
	{
		res.push(current.value);
		current = current.rest;
	}
	return res;
}

function prepend(el, list) {
	return {value: el, rest: list};
}

function nth(list, n) {
	if (!list || n < 0) return undefined;
	else if (n == 0) return list.value;
	else return nth(list.rest, n-1);
}

console.log(listToArray(prepend(0, arrayToList([1, 2, 3]))))
console.log(nth(arrayToList([1, 2, 3]), -1))