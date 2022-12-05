
var unsorted1 = [5, 7,  80, 1, 17, 44]; // declare array called unsorted1 with 6 unsorted numbers
var unsorted2 = [99, 0, 11, 47473, 2, 2]; // declare array called unsorted2 with 6 unsorted numbers

selectionSort(unsorted1); // call the selectionSort function on unsorted1
selectionSort(unsorted2); // call the selectionSort function on unsorted2

function selectionSort(arrayToSort){ // define a function called selectionSort that takes in an array called arrayToSort
	var sorted =[]; // create an empty array called sorted which will be used to store the sorted elements
 	while(arrayToSort.length > 0){ // start a loop that continues running until there are no more elements left in the original array
  	 	sorted.push(findAndRemoveSmallest(arrayToSort)); // find the smallest element in the array and move it to the sorted array
  }
	console.log(sorted); // log the sorted array to the console
}


function findAndRemoveSmallest(arrayToSort){ // define a helper function called findAndRemoveSmallest that takes in the array to be sorted
	var smallest = Number.MAX_SAFE_INTEGER; // set a variable called smallest to the largest possible safe integer, which will be used to track the smallest element in the array
    var smallestIndex; // create a variable called smallestIndex which will be used to store the index of the smallest element in the array
	for(var i=0;i < arrayToSort.length; i++){ // loop through each element of the array
        if(arrayToSort[i] < smallest) // if the current element is smaller than the smallest element found so far
        {
            smallest = arrayToSort[i]; // set the current element as the new smallest element
            smallestIndex = i; // store the index of the current element
        }
    }

    arrayToSort.splice(smallestIndex,1); // remove the smallest element from the array
    return smallest; // return the smallest element
    }