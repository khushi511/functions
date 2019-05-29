//Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
       //  key = 3
//Output : Found at index 8

//Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
     //    key = 30
//Output : Not found

//Input : arr[] = {30, 40, 50, 10, 20}
    //    key = 10   
//Output : Found at index 3

var arr = [7,8,1,2,3,4,5,6];
var BinarySearch = function(arr, value, start = 0, end = (arr.length - 1)){
	var mid = Math.floor(( start + end ) / 2);
  if(arr[mid] == value){
  	return mid;
  }
  
  if(start >= end) {
  	return -1;
  }
  return arr[mid] > value ? 
  	BinarySearch(arr, value, start, mid - 1):
    BinarySearch(arr, value, mid+1, end);
  }
  
 var findElementAtIndex = function(arr, val) {
 		var pivot = Math.floor((arr.length - 1)/2);
 		if(arr[0] > val) {
    	return BinarySearch(arr, val, pivot );
    }
    else {
    	return BinarySearch(arr, val, 0, pivot);
    }
    }
console.log(findElementAtIndex(arr,7))

