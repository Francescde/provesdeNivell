
## Exercise 1:

Given two strings, write a method to decide if one is a permutation of the other.


## Solution:

My first solution was to sort the two strings, and comparing the results as done in the module StringArePermutation using the function compare

    export function compare(text1: string, text2: string):boolean {
        const n1 = text1.length;
        const n2 = text2.length;
        if(n1!=n2)
            return false;
        const list1=text1.split("").sort().join();
        const list2=text2.split("").sort().join();
        return list1==list2;
    }

## Solution2:

Another solution should be to build another structure as could be a hash list to know the letters and for each letter it's ocurrencies in the text and then asserting if are the same. 

This solution is build in the module StringArePermutation using the function compare2

    export function compare2(text1: string, text2: string):boolean {
        const n1 = text1.length;
        const n2 = text2.length;
        if(n1!=n2)
            return false;
        let dict1 = {};
        let dict2 = {};
        for (let i = 0; i < n1; i++) {
            if(dict1[text1.charAt(i)]==undefined){
                dict1[text1.charAt(i)]=1;
            }
            else{
                ++dict1[text1.charAt(i)];
            }
            if(dict2[text2.charAt(i)]==undefined){
                dict2[text2.charAt(i)]=1;
            }
            else{
                ++dict2[text2.charAt(i)];
            }
        }
        console.log(dict1,dict2);
        for (var key in dict1) {
            if(dict2[key]==undefined || dict2[key]!=dict1[key]){
                return false;
            }
        }
        return true;
    }
    

## Decision

Performance wise I think the second solution can be quicker than the first one with large strings. This is because the sorting algorithm needs from n*(log n) comparisions to n**2 and the other algorithm it's lineal

Although I prefer the first implementation. The main reason being that the first solution it's more readable than the second one. And if a new developer has to change it's behavior it will have an easier time understanding the program. So in conclusion any update would be cheaper.
                                            
Furthermore I don't consider, in this scenario, the execution time to be a decisive factor. If I did I would have built the solution in a compiled language like c rather than an interpreted one, and also if I want a better execution time the solution is rather simple: It's as easy as to look for a better machine.


#### 3. How to test the implementations

1.- Clone or download the repository.

    git clone https://github.com/Francescde/provesdeNivell.git

2.- On that terminal go to this folder

    cd provesdeNivell/Task2/StringIsPermutation

2.- Install the dependancies

    npm install

4.- Run the tests on the subfolder Tests

    npm test


