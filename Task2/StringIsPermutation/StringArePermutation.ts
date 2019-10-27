

export module StringArePermutation {

    export function compare(text1: string, text2: string):boolean {
        const n1 = text1.length;
        const n2 = text2.length;
        if(n1!=n2)
            return false;
        const list1=text1.split("").sort().join();
        const list2=text2.split("").sort().join();
        return list1==list2;
    }

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
            console.log("\n"+key+":"+dict2[key],key+":"+dict1[key]);
            if(dict2[key]==undefined || dict2[key]!=dict1[key]){
                return false;
            }
        }
        return true;
    }



}
