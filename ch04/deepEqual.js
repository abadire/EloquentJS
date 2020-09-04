function deepEqual(lhs, rhs)
{
	let deepEq = true;
	if (typeof lhs == "object" && lhs != null && typeof rhs == "object" && rhs != null)
	{
		for (let key of Object.keys(lhs))
		{
			if (key in rhs && typeof rhs[key] == "object" && rhs[key] != null)
			{
				return deepEqual(lhs[key], rhs[key]);
			}
			if (!(key in rhs && lhs[key] === rhs[key]))
			{
				deepEq = false;
				break;
			}
		}
	}
	else
	{
		deepEq = false;
	}
	return deepEq;
}