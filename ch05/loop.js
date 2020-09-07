function loop(val, pred, inc, func) {
	for (val; pred(val); val = inc(val))
	{
		func(val);
	}
}

function print(p) {
	console.log(p);
}

loop(1, a => a < 5, a => ++a, a => a);