function range(beg, end, step = 1) {
	let ret = [];
	if (step > 0)
	for (let i = beg; i <= end; i += step) ret.push(i);
	else 
	for (let i = beg; i >= end; i += step) ret.push(i);
	return ret;
}

function sum(nums) {
	let result = 0;
	for (let num of nums) result += num;
	return result;
}

console.log(range(1, 10, 2));