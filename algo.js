// 424. Longest Repeating Character Replacement



// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring the same letter you can get after performing the above operations.








/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let charCount = {}; // To count occurrences of each character in the current window
    let maxFreq = 0; // Maximum frequency of any character in the current window
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // The maximum length of the substring

    for (let right = 0; right < s.length; right++) {
        // Step 1: Expand the window by adding the right character
        let char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;
        
        // Update the max frequency of the most common character in the current window
        maxFreq = Math.max(maxFreq, charCount[char]);

        // Step 2: Shrink the window if the number of replacements exceeds k
        while (right - left + 1 - maxFreq > k) {
            let leftChar = s[left];
            charCount[leftChar]--;
            left++; // Move the left pointer to shrink the window
        }

        // Step 3: Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};