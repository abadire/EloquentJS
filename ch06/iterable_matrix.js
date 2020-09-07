class Matrix
{
	constructor(width, height, fill = (x, y) => undefined)
	{
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y != height; y++)
		{
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = fill(x, y);
			}
		}
	}

	get(x, y)
	{
		return this.content[y * this.width + x];
	}

	set(x, y, value)
	{
		this.content[y * this.width + x] = value;
	}

	[Symbol.iterator]()
	{
		return new MatrixIterator(this);
	}
}

class MatrixIterator
{
	constructor(matrix)
	{
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next()
	{
		if (this.y == this.matrix.height) return {done: true};

		let value = {x: this.x,
					 y: this.y,
					 value: this.matrix.get(this.x, this.y)};
		this.x++;
		if (this.x == this.matrix.width)
		{
			this.x = 0;
			this.y++;
		}

		return {value, done: false};
	}
}

let mat = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, val} of mat)
{
	console.log(x, y, val);
}