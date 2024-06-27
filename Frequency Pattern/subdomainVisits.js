/**
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 * Approach: 
 *   1. Traverse Array and store the count of each item
 *        a. split the array item based on " "
 *        b. split the second item in the array based on "."
 *        c. check if key is present in hashtable
 *                if present, increment the count otherwise store in the table
 *         {
 *          google.mail.com: 900, 
 *          mail.com: 900 + 1, 
 *          com: 900 + 50 + 1,
 *          yahoo.com: 50,
 *          intel.mail.com: 1,
 *          wiki.org: 5,
 *          org: 5
 *         }
 * 
 *          Return again in the form of [rep d1.d2.d3, rep d1.d2, rep d1]        
 *  
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let result = [];
    let lookup = {};
    cpdomains.forEach(domain => {
        const valAndDomain = domain.split(" ");
        const subdomain = valAndDomain[1].split(".");

        for(let i = 0; i < subdomain.length; i++) {
            const str = subdomain.slice(i).join('.');
            lookup[str] = (lookup[str] || 0) + Number(valAndDomain[0]);

        }
    })
    for(const [key, value] of Object.entries(lookup)){
        const item = `${value} ${key}`
       result.push(item);
    }
    return result;
};

const cpdomains1 = ["9001 discuss.leetcode.com"];
const cpdomains2 = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];

console.log(subdomainVisits(cpdomains1));
console.log(subdomainVisits(cpdomains2));