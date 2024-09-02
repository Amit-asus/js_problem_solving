let input = [1, 2, 3, 4, 3, 2, 1];
// Output: [1, 2, 3, 4];

//1
function removeDuplicate(arr) 
{
    const res  = [] ;
    arr.forEach((e)=>{
         if (!res.includes(e))
         {
            res.push(e) ;
         }
    })

    return res ;
}


// console.log(removeDuplicate(input)) ;

//2
function removeDuplicate2(arr)
{
    return [new Set(...arr)] ;
}

//console.log(removeDuplicate(input))

const  s  =new Set([1,2,3,4]) ;
// console.log(s) ;

//3
//question find the intersection of the 2 array 
const arr  = [1,2,3,4,5]
const brr  = [5,6,73,2,3]
const res  = [] ;
arr.forEach((a)=>{
    if( brr.includes(a) )
    {
        res.push(a) ;
    }
})
// console.log(res)

//4
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arr1.filter(item => arr2.includes(item));
// console.log(intersection);  // [3, 4]


//5
//function to swap first 2 element 
function swap2([f,s,...rest])
{
    return [s,f,...rest] ;
}
const array = [3, 5, 1, 4, 2];

//console.log(swap2(array));  // [5, 3, 1, 4, 2]

//6 count the no of 2s 
const numbers = [1, 2, 3, 2, 4, 2, 5];
const count = numbers.reduce((acc,n)=>{ return (n==2) ? acc +1  :  acc}  ,0)
//console.log(count); // 3 (The number 2 appears 3 times in the array)


//question 7 
