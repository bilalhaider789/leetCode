// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

 

// Example 1:

// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]
const successfulPairs = (spells, potions, success)=> {
	let res = [];
	potions.sort((a, b) => a - b);
	for (let i = 0; i < spells.length; i++) {
		let h = potions.length-1, l = 0, mid;
		while (l <= h) {
			mid = ~~(l + (h-l)/2);
			if (spells[i] * potions[mid] >= success) h = mid-1;
			else l = mid+1;
		}
		res[i] = potions.length-1 - h;
	}
	return res;
};

console.log(successfulPairs([5,1,3],[1,2,3,4,5],7));