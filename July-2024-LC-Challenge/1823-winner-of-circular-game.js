/**
 * 
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game/?envType=daily-question&envId=2024-07-08
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let set = new Set();
    for(let i = 1; i <= n; i++){
        set.add(i);
    }

    console.log("SEt ", set);

    let j = 1;
    for(let i = j; i <= n; i++){
        if(i === k){
            n--;
            j = i+1;
            set.delete(i);
        }
    }
    console.log("After deletion SEt ", set);
    
};

const n = 5, k = 2;
// const n = 6, k = 5;
console.log(findTheWinner(n, k)); //