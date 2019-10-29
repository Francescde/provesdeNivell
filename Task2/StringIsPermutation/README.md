
# Exercise 1:

Given two strings, write a method to decide if one is a permutation of the other.

## Solution:
My first solution was to sort the two strings and compare the results. To do that I used the module StringArePermutation using the function compare

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

Another solution could be to count the repetitions of each of the letters within each of the two strings. At the end, we would contrast if the occurrencies of each letter are the same within the two strings.

This solution is built in the module StringArePermutation using the function compare2

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

Performance-wise, I think that the second solution can be faster than the first one when there are large strings.

The reason is that the sorting algorithm requires anywhere from n*(log n) comparisons to n^2 (where n is the size of the strings), and it requires prior sorting of two strings, followed by comparing the results.

On the other hand, the second algorithm is not lineal with only two loops of n words. Moreover, there are less comparisons, because it groups the characters on the first loop. Therefore, the computational cost will be n+m (where n is the length of the strings and m the number of distinct charecters)

#### 3. How to test the implementations

1.- Clone or download the repository.

    git clone https://github.com/Francescde/provesdeNivell.git

2.- On that terminal go to this folder

    cd provesdeNivell/Task2/StringIsPermutation

2.- Install the dependancies

    npm install

4.- Run the tests on the subfolder Tests

    npm test

5.- Run the test coverage

    npm run coverage


