class Vector
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	plus(rhs)
	{
		return new Vector(this.x + rhs.x, this.y + rhs.y);
	}

	minus(rhs)
	{
		return new Vector(this.x - rhs.x, this.y - rhs.y);
	}

	get length()
	{
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
}

let v1 = new Vector(1, 2);
let v2 = new Vector(3, 5);
let v3 = v1.plus(v2);
console.log(v3.length);