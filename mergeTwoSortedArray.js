//[1,2,10] and [8,20,30]
//[1,2,8,10,20,30]


var mergeSortedArray = function(arr1, arr2) {
	let i1 = 0, i2 = 0;
  let res = [];
 	let arrayLengthProblem =  arr1.length == 0 || arr2.length == 0 || arr1.length > 10 || arr2.length > 10;
  if(arrayLengthProblem) {
  	return "Check your array";
  }
  //normal iteration 
  while(arr1[i1] && arr2[i2]) {
  	if(arr1[i1] < arr2[i2]) {
    		res.push(arr1[i1]);
        i1++;
    }
    else if(arr1[i1] > arr2[i2]) {
    	res.push(arr2[i2]);
       i2++;
    }
    else {
    	res.push(arr2[i2]);
      i1++;
      i2++;
    }
  }
  
  //if all the value of first array is iterated and 2nd is pending
  while(i2 < arr2.length) {
  	res.push(arr2[i2]);
    i2++;
  }
  
  //if all the value of second array is iterated and 1st is pending
  while(i1 < arr1.length) {
  	res.push(arr1[i1]);
    i1++;
  }
  
  return res;
}

console.log(mergeSortedArray([1, 3, 4, 5], [2, 4, 6, 8]));
