// Optimized function using Math.max
const findMaxNumber = (arr) => Math.max(...arr);

// Asynchronous function with proper error handling
const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
		return await response.json();
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return null;
	}
};

// Modernized function using Promises instead of callbacks
const getUserData = (userId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const users = {1: 'Alice', 2: 'Bob'};
			users[userId] ? resolve(users[userId]) : reject(new Error('User not found'));
		}, 1000);
	});
};

// Secure function without eval()
const executeCodeSafely = (fn) => {
	if (typeof fn === 'function') {
		return fn();
	} else {
		throw new Error('Invalid function execution');
	}
};

// Function calls
console.log(findMaxNumber([10, 5, 8, 20, 3]));
fetchData('https://jsonplaceholder.typicode.com/posts/1').then(console.log);
getUserData(1).then(console.log).catch(console.error);
