var unsorted1 = [5, 7,  80, 1, 17, 44];
var unsorted2 = [99, 0, 11, 47473, 2, 2];

selectionSort(unsorted1);
selectionSort(unsorted2);

function selectionSort(arrayToSort){
	var sorted =[];
 	while(arrayToSort.length > 0){
  	 	sorted.push(findAndRemoveSmallest(arrayToSort));
  }
	console.log(sorted);
}


function findAndRemoveSmallest(arrayToSort){
	var smallest = Number.MAX_SAFE_INTEGER;
    var smallestIndex;
	for(var i=0;i < arrayToSort.length; i++){
        if(arrayToSort[i] < smallest)
        {
            smallest = arrayToSort[i];
            smallestIndex = i;
        }
    }

    arrayToSort.splice(smallestIndex,1);
    return smallest;
    }
