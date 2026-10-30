// Bài 1
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// Bài 2
function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) sum += arr[i];
    }
    return sum;
}

// Bài 3
function findMin(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// Bài 4
function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++;
    }
    return count;
}

// Bài 5
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Bài 6
function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Bài 7
function isAscending(arr) {
    if (arr.length <= 1) return false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) return false;
    }
    return true;
}

// Bài 8
function countGreaterThan(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) count++;
    }
    return count;
}

// Bài 9
function alternateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) sum += arr[i];
        else sum -= arr[i];
    }
    return sum;
}

// Bài 10
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// Bài 11
function filterEvensAndSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) sum += arr[i];
    }
    return sum;
}

// Bài 12
function findLongestWord(arr) {
    if (arr.length === 0) return "";
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) longest = arr[i];
    }
    return longest;
}

// Bài 13
function calculateGrade(scores) {
    if (scores.length === 0) return "F";
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let avg = sum / scores.length;
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
}

// Bài 14
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}

// Bài 15
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) result.push(arr[i]);
    }
    return result;
}

// Bài 16
function findPairsWithSum(arr, sum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// --- HIỂN THỊ KẾT QUẢ RA GIAO DIỆN HTML ---
document.getElementById('res1').innerText = "Kết quả: " + findMax([1, 3, 5, 7, 9]);
document.getElementById('res2').innerText = "Kết quả: " + sumOddNumbers([1, 2, 3, 4, 5]);
document.getElementById('res3').innerText = "Kết quả: " + findMin([5, 2, 8, 1, 4]);
document.getElementById('res4').innerText = "Kết quả: " + countPositiveNumbers([-1, 2, 3, -4, 5]);
document.getElementById('res5').innerText = "Kết quả: " + sumArray([1, 2, 3, 4, 5]);
document.getElementById('res6').innerText = "Kết quả: " + calculateAverage([10, 20, 30, 40, 50]);
document.getElementById('res7').innerText = "Kết quả: " + isAscending([1, 2, 3, 5]);
document.getElementById('res8').innerText = "Kết quả: " + countGreaterThan([1, 5, 7, 2, 3], 3);
document.getElementById('res9').innerText = "Kết quả: " + alternateSum([10, 5, 6, 3]);
document.getElementById('res10').innerText = "Kết quả: " + sumOfSquares([1, 2, 3]);
document.getElementById('res11').innerText = "Kết quả: " + filterEvensAndSum([1, 2, 3, 4, 5, 6]);
document.getElementById('res12').innerText = "Kết quả: " + findLongestWord(["apple", "banana", "cherry", "date"]);
document.getElementById('res13').innerText = "Kết quả: " + calculateGrade([85, 90, 95]);
document.getElementById('res14').innerText = "Kết quả: " + findMissingNumber([1, 2, 4, 5, 6], 6);
document.getElementById('res15').innerText = "Kết quả: " + JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
document.getElementById('res16').innerText = "Kết quả: " + JSON.stringify(findPairsWithSum([1, 2, 3, 4, 5], 5));