let array = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]; 

function jumpSearch(arr, target) {
	let len = arr.length
	let step = Math.floor(Math.sqrt(len));

	let blockStart = 0, currentStep = step;
	console.log("testing", blockStart, arr[blockStart], target, Math.min(currentStep, len) -1)

	while (arr[Math.min(currentStep, len) - 1] < target)
	{
		blockStart = currentStep;

		currentStep += step;
		if (blockStart >= len)
			return -1;
	}

	console.log("testing", blockStart, arr[blockStart], target, step)

	while (arr[blockStart] < target)
	{
		blockStart++;

		if (blockStart == Math.min(currentStep, len))
			return -1;
	}
	console.log("testing", blockStart, arr[blockStart], target)
	if (arr[blockStart] == target)
		return blockStart
	else
		return -1;
}

console.log(jumpSearch(array, 8));