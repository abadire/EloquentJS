function isEven(a)
{
	if (a < 0) return isEven(-a);
	else if (a < 2) return a == 0;
	else return isEven(a-2);
}

