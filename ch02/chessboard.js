let first = true;
let size = 5;
for (let i = 0; i < size; i++)
{
	let firstChar = first ? "#" : " ";
	let secondChar = first ? " " : "#";
	for (let j = 1; j <= size; j++)
	{
		process.stdout.write(j % 2 == 0 ? secondChar : firstChar);
	}
	console.log();
	first = !first;
}