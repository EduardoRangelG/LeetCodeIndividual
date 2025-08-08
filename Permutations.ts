function getPermutations(nums: number[]) : number[][]{
    const res: number[][] = [];
 
    const swap = (numsList: number[], right: number, left: number) => {
        const temp = numsList[right];
        numsList[right] = numsList[left];
        numsList[left] = temp;
    }   
 
    const permuter = (n: number, uniqueList : number[]) => {
        if (n === 1){
            res.push(uniqueList.slice());
            return;
        }
 
        permuter((n - 1), uniqueList);
 
        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0){
                swap(uniqueList, i, (n - 1));
            }
            else {
                swap(uniqueList, 0, (n - 1));
            }
            permuter((n - 1), uniqueList);
        }
    }
 
    permuter(nums.length, nums.slice());
 
    return res;
}
 
const list1 = [1, 2, 3];
const res1 = getPermutations(list1);
console.log(res1);

const list2 = [0, 1];
const res2 = getPermutations(list2);
console.log(res2);

const list3 = [1];
const res3 = getPermutations(list3);
console.log(res3);