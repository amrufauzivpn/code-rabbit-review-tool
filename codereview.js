// Inefficient loop (potential off-by-one error)
function findMaxNumber(arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		// AI should suggest using Math.max
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

// Async function without error handling (AI should suggest try-catch)
async function fetchData(url) {
	const response = await fetch(url);
	return response.json(); // Missing error handling
}

// Callback-based function (AI may suggest Promises)
function getUserData(userId, callback) {
	setTimeout(() => {
		const users = {1: 'Alice', 2: 'Bob'};
		if (users[userId]) {
			callback(null, users[userId]);
		} else {
			callback(new Error('User not found'), null);
		}
	}, 1000);
}

// Unused variable (AI should flag this as an issue)
var unusedVariable = 'This is never used';

// Poorly formatted function (AI should suggest fixing spacing)
function addNumbers(a, b) {
	return a + b;
}

// Security vulnerability (AI should suggest avoiding eval)
function executeCode(code) {
	return eval(code); // Potential security risk
}

// Hardcoded credentials (AI should flag this as a security issue)
const apiKey = '123456-SECRET-API-KEY';

// Test function calls
console.log(findMaxNumber([10, 5, 8, 20, 3]));
fetchData('https://jsonplaceholder.typicode.com/posts/1').then(console.log);
getUserData(1, (err, user) => {
	if (err) console.error(err);
	else console.log(user);
});

// Code injection risk (AI should warn about this)
const userInput = "console.log('Hacked!')";
executeCode(userInput);
