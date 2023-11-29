export default function searchKeys(keys, searchElement) {
	let tempArr = [];
	console.log("Entering search now:");
	console.log(`The Search element is ${searchElement}`);
	for (let index in keys) {
		let key = keys[index];
		console.log(`The current key is ${key}`);
		if (key.includes(searchElement)) {
			console.log(`${key} includes ${searchElement}`);
			tempArr = [...tempArr, key];
		}
	}
	return tempArr;
}
