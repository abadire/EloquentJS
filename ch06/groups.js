class Group
{
	constructor()
	{
		this.members = [];
	}

	has(el)
	{
		return this.members.includes(el);
	}

	add(el)
	{
		if (!this.has(el)) this.members.push(el);
	}

	delete(el)
	{
		let idx = this.members.indexOf(el);
		if (idx != -1) this.members.splice(idx, 1);
	}

	static from(obj)
	{
		let ret = new Group();
		for (let el of obj)
		{
			ret.add(el);
		}
		return ret;
	}

	[Symbol.iterator]()
	{
		return new GroupIterator(this);
	}
}

class GroupIterator
{
	constructor(group)
	{
		this.pos = 0;
		this.group = group;
	}

	next()
	{
		if (this.pos == this.group.members.length) return {done: true};

		let value = this.group.members[this.pos];

		this.pos++;

		return {value, done: false};
	}
}

