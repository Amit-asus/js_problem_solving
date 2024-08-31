let input = [1, 2, 3, 4, 3, 2, 1];
// Output: [1, 2, 3, 4];


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


function removeDuplicate2(arr)
{
    return [new Set(...arr)] ;
}

//console.log(removeDuplicate(input))

const  s  =new Set([1,2,3,4]) ;
console.log(s) ;


