console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge (arr)
{
// debugger
var total = arr.reduce( (total, x) =>  
{ var y =x.age;
 return  total+ y;
}, 0 )
var avg = total/(arr.length);

return avg;
}




/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName (arr)
{ 
  // debugger
  var output = arr.reduce ( (longest, x) => 
  { var name = x.name["first"]+" "+x.name["last"];
    if (longest.length < (name).length)
    longest= name;
    return longest;
  }   ,"")

  return output
}

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber (arr)
{
 var maximum = arr.reduce((max, x) => {
    if (x>max)
    { max =x;}
    return max
  } )
  return maximum
}

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar (x, y)
{ var z= x.split("");
  var output = z.reduce( (c,l ) => 
    {
      if (l===y)
      c++;
      return c;
    } , 0 ) 

return output
  }

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs (x,y)
{



}






//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly (arr)
{
var even = arr.filter ( x => x%2===0 )

return even;
}

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour (arr)
{
var four = arr.filter ( x => x%4===0 )

return four;
}

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar1 (arr, l)
{
// debugger
  var output= arr.filter ( x => {
  var com = (x.split("").filter ( m => l===m));
  return com.length>0;
}  
)
return output

}

function containChar (arr, l)
{
// debugger
var output= arr.filter ( x => x.includes(l))
return output

}


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength (arr)
{
//  debugger
  var c=-1;

   var output = arr.filter ( x => {
   c++; 
   return ((x.length)%2===1 &&  c%2===0) } )

   return output
}


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function  olderThan (x, y)
{
  var output= x.filter ( m => m.age>y )
  return output;
}





/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function  shorterThan (x , y)
{
  var output= x.filter (m => m.length < y)

  return output;
}

// if you finish the exercises review the material of the week and help your classmate
