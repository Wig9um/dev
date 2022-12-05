var unsorted1 = [5, 7,  80, 1, 17, 44]; // declare array called unsorted1 with 6 unsorted numbers
var unsorted2 = [99, 0, 11, 47473, 2, 2]; // declare array called unsorted2 with 6 unsorted numbers

sortArray(unsorted1); // call the sortArray function on unsorted1
sortArray(unsorted2); // call the sortArray function on unsorted2

function sortArray(arrayToSort){ // define a function called sortArray that takes in an array called arrayToSort
	var isSorted = false; // set a boolean variable called isSorted to false, which will be used to check if the array is sorted
	 while(isSorted === false){ // start a loop that continues running until isSorted is true
   	 isSorted = true; // assume that the array is sorted at the start of each iteration
     for(var i = 0; i < arrayToSort.length-1; i++) // loop through each element of the array, except the last one
     {
        var current = arrayToSort[i]; // set a variable called current to the current element of the array
        var next = arrayToSort[i+1]; // set a variable called next to the next element of the array

        if(current > next){ // if the current element is greater than the next element,
          //Swap next and current
          arrayToSort[i] = arrayToSort[i] + arrayToSort[i+1]; // add the two elements together and store the result in the current element
          arrayToSort[i+1] = arrayToSort[i] - arrayToSort[i+1]; // subtract the next element from the current element and store the result in the next element
          arrayToSort[i] = arrayToSort[i] - arrayToSort[i+1]; // subtract the next element from the current element and store the result in the current element
          isSorted = false; // set isSorted back to false, because the array is not yet sorted
        }

     }
   }
   console.log(arrayToSort) // log the sorted array to the console

}