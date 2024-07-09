/**
 * 
 * https://leetcode.com/problems/average-waiting-time/?envType=daily-question&envId=2024-07-09
 * @param {number[][]} customers
 * @return {number}
 * 
 * Time : O(n)
 */

/*
var averageWaitingTime = function(customers) {
    const noOfCustomers = customers.length;
    let avgTime = 0;
    let preparationStartTime, foodPrepFinishingTime, actualFoodPrepTime;

    for(let i = 0; i < noOfCustomers; i++) {
        const [arrivalTime, foodPrepDuration] = customers[i];
        preparationStartTime = i === 0 || arrivalTime > foodPrepFinishingTime ? arrivalTime : foodPrepFinishingTime;
        foodPrepFinishingTime = preparationStartTime + foodPrepDuration;
        actualFoodPrepTime = foodPrepFinishingTime - arrivalTime;
        avgTime += actualFoodPrepTime;
    }
    return avgTime/noOfCustomers;
};

*/

// Current Time: Whichever is greater between currenttime and arrival + duration
var averageWaitingTime = function(customers) {
    const noOfCustomers = customers.length;
    let avgTime = 0;
    let currentTime = 0;

    for(let i = 0; i < noOfCustomers; i++) {
        const [arrival, duration] = customers[i];
        currentTime = Math.max(currentTime, arrival) + duration;
        avgTime += currentTime - arrival;
    }
    return avgTime/noOfCustomers;
};

// const customers = [[1,2],[2,5],[4,3]];
const customers = [[5,2],[5,4],[10,3],[20,1]];
console.log(averageWaitingTime(customers)); //