let fruits = [
  {
    fruit_name: "Apple",
    fruit_color: "Red",
  },
  {
    fruit_name: "Pomegranate",
    fruit_color: "Red",
  },
  {
    fruit_name: "Grapes",
    fruit_color: "Green",
  },
  {
    fruit_name: "Kiwi",
    fruit_color: "Green",
  },
];

//question one
//filter the fruits whose color is red

const filteredFruit = fruits.filter((obj) => obj.fruit_color === "Red");
//console.log(filteredFruit);

//question  2
//Group the fruits by their color into an object, where the keys are the colors and the values are arrays of fruit names.

function groupBy(fruits) {
  const ans = {};
  fruits.forEach((element) => {
    if (!ans[element.fruit_color]) {
      ans[element.fruit_color] = [];
    }
    ans[element.fruit_color].push(element);
  });

  return ans;
}

//console.log(groupBy(fruits)) ;


//question no 3 
//Find the Fruit with the Longest Name
//// Expected Output: { fruit_name: "Pomegranate", fruit_color: "Red" }


function longestName (fruits) 
{
  let res =  {}
  let longestLength  = 0  ;
  fruits.forEach((ele)=>{
     if(ele.fruit_name.length >  longestLength)
     {
        longestLength  = ele.fruit_name.length ;
        res = ele ;
     }
  })

  return  res  ;
}

console.log(longestName(fruits)) ;
