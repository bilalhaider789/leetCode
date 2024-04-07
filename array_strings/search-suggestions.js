// You are given an array of strings products and a string searchWord.

// Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return a list of lists of the suggested products after each character of searchWord is typed.

 

// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// Explanation: The only word "havana" will be always suggested while typing the search word.

var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res = [];
    for (let i = 0; i < searchWord.length; i++) {
        products = products.filter(p => p[i] === searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
};